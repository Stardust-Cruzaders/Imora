CREATE TABLE Users (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Avatar TEXT NOT NULL,
    Description VARCHAR(600) NOT NULL,
    Phone VARCHAR(75),
    IsHost BOOLEAN NOT NULL DEFAULT false
    );

INSERT INTO USERS(Name,Email,Avatar,Description,IsHost) 
VALUES('Kauã Steliano','stelianok@gmail.com','https://avatars2.githubusercontent.com/u/39469125?s=460&u=97e778a861a7a42bee1b16f6be1c80467c50c1d1&v=4','Espero que seja bem hospedado, tento sempre oferecer o melhor serviço possível',true);

CREATE TABLE ResidenceType (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(100)
    );

INSERT INTO  ResidenceType(Name) VALUES('Apartamento');
INSERT INTO  ResidenceType(Name) VALUES('República');
INSERT INTO  ResidenceType (Name) VALUES('Casa');
INSERT INTO  ResidenceType (Name) VALUES('KitNet');

CREATE TABLE ResidencePlace (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(100)
    );

INSERT INTO  ResidencePlace (Name) VALUES('Espaço Inteiro');
INSERT INTO  ResidencePlace (Name) VALUES('Quarto inteiro');
INSERT INTO  ResidencePlace (Name) VALUES('Quarto compartilhado');

CREATE TABLE Residences (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(255),
    Description VARCHAR(600) NOT NULL,
    Images TEXT[] NOT NULL,
    Available BOOLEAN NOT NULL DEFAULT true,
    ZipCode VARCHAR(10) NOT NULL,
    State VARCHAR(4) NOT NULL,
    City VARCHAR(50) NOT NULL,
    Neighborhood VARCHAR(75) NOT NULL,
    Street VARCHAR(75) NOT NULL,
    Number VARCHAR(75) NOT NULL,
    ResidenceType INT NOT NULL,
    CONSTRAINT fk_residenceType FOREIGN KEY(ResidenceType) REFERENCES ResidenceType(Id) ON UPDATE CASCADE ON DELETE SET NULL,
    ResidencePlace INT NOT NULL,
    CONSTRAINT fk_residencePlace FOREIGN KEY(ResidencePlace) REFERENCES ResidencePlace(Id) ON UPDATE CASCADE ON DELETE SET NULL,
    Price NUMERIC(5,2) NOT NULL,
    AllowSmokers BOOLEAN DEFAULT true,
    AllowPets BOOLEAN DEFAULT true,
    Wifi BOOLEAN  DEFAULT false,
    Kitchen BOOLEAN  DEFAULT false,
    TV BOOLEAN  DEFAULT false,
    AC BOOLEAN  DEFAULT false,
    NotebookWork BOOLEAN  DEFAULT false,
    Grill BOOLEAN  DEFAULT false,
    Pool BOOLEAN  DEFAULT false,
    Parking BOOLEAN  DEFAULT false,
    NumRooms INT NOT NULL,
    NumBathrooms INT NOT NULL,
    MinTime INT NOT NULL,
    ResidentsNow INT NOT NULL,
    MaxResident INT NOT NULL,
    OwnerId INTEGER NOT NULL,
    CONSTRAINT fk_ResidenceOwner FOREIGN KEY(OwnerId) REFERENCES Users(Id) ON UPDATE CASCADE ON DELETE CASCADE
    );

INSERT INTO Residences (Name, Description, Images,Available,Zipcode,State,City,Neighborhood,Street,Number,ResidenceType,ResidencePlace,Price,AllowSmokers,AllowPets,Wifi,Kitchen,TV,AC,NotebookWork,Grill,Pool, Parking, NumRooms, NumBathrooms, MinTime, ResidentsNow,MaxResident,OwnerId) VALUES('Casa massa','casa 80m², próxima do bauru shopping, ruas movimentadas, farmácias e mercados próximos','{https://i.pinimg.com/474x/08/cc/66/08cc66ca97282b8adce5f18a8138b9fc.jpg,https://i.pinimg.com/474x/bf/16/08/bf1608b36a16ef90ad59fcfd980f0f40.jpg,https://i.pinimg.com/474x/b4/32/cf/b432cfdab88990d6081a91ce3dfffcf3.jpg,https://i.pinimg.com/474x/b0/ff/19/b0ff19bc04f086c8a9404d889b7bd23a.jpg,https://i.pinimg.com/474x/5f/b5/f7/5fb5f7e3de1cc8fe63b5ce283a7ae775.jpg}',true,'17016345','SP','Bauru','Bairro','RUA','990',3,1,675,false,true,true,true,true,true,true,true,false,true,3,2,72,3,4,1);

