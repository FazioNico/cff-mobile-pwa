# @Author: Nicolas Fazio <webmaster-fazio>
# @Date:   27-10-2017
# @Email:  contact@nicolasfazio.ch
# @Last modified by:   webmaster-fazio
# @Last modified time: 27-10-2017


# script Deploy gh-pages v0.0.1

function checkVersion {
	output=$(npm version ${release} --no-git-tag-version)
	version=${output:1}
}

checkVersion
# force add ./www to git
git add -f ./www/
# add all others files
git add --all
# commit changes
git commit -m "add www folder"
# create gh-pages  branch with www folder
git subtree split -P ./www/ -b gh-pages
# remove ./www folders from git
git rm -r --cached ./www/
# add files (stage removed files)
git add --all
# commit changes
git commit -m 'rm .temp folder'

# push gh-pages branch on remote gh-pages branch
git push origin gh-pages:gh-pages --force
# delete local gh-pages branch
git branch -D gh-pages
