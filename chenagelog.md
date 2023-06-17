
1.- Crea directorios para arquitectura hexagonal:

cd src
mkdir application
mkdir domain
mkdir infrastructure
cd ..

2.- Crea Directorios genericos

cd src
mkdir config
mkdir utils
cd ..

3.- generacion de adapter

mkdir -p src/infrastructure/adapters
mkdir -p src/infrastructure/controllers
mkdir -p src/infrastructure/repositories
mkdir -p src/infrastructure/services