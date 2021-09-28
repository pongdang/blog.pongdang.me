git remote update
git switch deploy
git reset --hard main

yarn build
cp CNAME ./build

if [ "${GITHUB_TOKEN}" == "" ]; then
    git config --local user.name "pongdang"
    git config --local user.email "pongdang0121@gmail.com"
else
    git config --local user.name "github-actions[bot]"
    git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
fi


git add -A
git commit -m "Deployed: `date +'%Y-%m-%d %H:%M:%S'`"


if [ "${GITHUB_TOKEN}" == "" ]; then
    git push origin deploy --force
    git push origin $(git subtree split --prefix build deploy):gh-pages --force
    
else
    git push --set-upstream https://pongdang:$GITHUB_TOKEN@github.com/pongdang/blog.pongdang.me deploy --force
    git push --set-upstream https://pongdang:$GITHUB_TOKEN@github.com/pongdang/blog.pongdang.me $(git subtree split --prefix build deploy):gh-pages --force
fi

rm -rf build
git switch main
