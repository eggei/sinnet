#!/bin/sh

if [ "$1" = "" ]; then
    echo "ERROR"
    echo "Please add a change note."
    echo "-------------------------------------------------------"
    echo 'Example: npm run deploy "Some changes here some changes there." '
    exit 1
fi

if ! [ "$2" = "" ]; then
    echo "ERROR"
    echo "Use quotes for your changes message."
    echo "-------------------------------------------------------"
    echo 'Example: npm run deploy "Some changes here some changes there." '
    exit 1
fi

npm run build
git add .
git commit -m "$1"
git push origin main

echo "-------------------------------------------------------"
echo ""
echo "Successfully deployed!"
echo ""
echo "-------------------------------------------------------"
