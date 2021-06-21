rmdir /s /q "../backend/src/build"

move "./build" "../backend/src"

cd ..

cd backend

git add .

git commit -m "deploy"

git push heroku master

