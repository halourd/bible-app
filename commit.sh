#!bin/bash

git add .

git commit -m "$1"

git push 

echo "+---------------------------------+"
echo "[SUCCESS] Pushed to remote branch"
echo "+---------------------------------+"

# create a condition that if $2 is existing
# then merge branch to main
# else do nothing

# how to add flags that if it exist in the argument it merge to main
# else do nothing

# for ex. commit.sh "commit message" -m dev/harold main

if [ -z "$2" ]
then
      echo "No Merge to happen"
else
      echo "[MERGING] Enabled. Merging [$3] to [$4]"
      git checkout $4
      git merge $3
      git push
      git checkout $3
      echo "[SUCCESS] Merged successfully"
fi


