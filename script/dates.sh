#!/bin/sh

while read date
do
    fileName=`echo "$date" | tr " " "_"`
    year=${date:(-4)}
    minimeDate="${date%?????}"
    commitDate="$minimeDate 14:00 $year +0500"
    name=$(git config user.name)
    email=$(git config user.email)
    echo "Creating file... $fileName"
    touch "$fileName"
    git add "$fileName"
    git commit --date="$commitDate" --author="$name <$email>" -m "$fileName"
done <dates.txt
