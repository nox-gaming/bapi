echo '=== Building Docker image ==='
echo '|> Removing node_modules'
rm -rf ./node_modules
echo "|> Construction de l'image"
docker build -t nox-api .