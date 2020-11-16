/******************* ENTIDAD BUSQUEDA ***************************/

create table Busquedas(
    busqueda_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    search_key VARCHAR(45)
);

/******************* ENTIDAD NOTICIA *****************/

create table TAGS_Noticia(
    tag_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_tag VARCHAR(25)
);

create table Noticia(
    noticia_id NOT NULL INT PRIMARY KEY AUTO_INCREMENT,
    image_url VARCHAR(150),
    title  VARCHAR(45),
    content VARCHAR(45),
    tags    INT NOT NULL,
    fecha_emision  DATE 
);
create table Associated_tagNoticia(
    Atag INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_id INT NOT NULL,
    noticia_id INT NOT NULL,
    FOREIGN KEY (tag_id) REFERENCES TAGS_Noticia(tag_id),
    FOREIGN KEY (noticia_id) REFERENCES Noticia(noticia_id)
);

/*************** ENTIDAD USUARIO *******************************/

create table User(
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username_user VARCHAR(45),
    password_user VARCHAR(45),
    fullname_user VARCHAR(50),
    inscription_date DATE,
);
create table Periodistas(
    periodista_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    alias  VARCHAR(45),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

/****************************** CASO DE USO **********************************/

/*caso de uso 01*/
create table LikeNoticia(
    like_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    noticia_id INT NOT NULL,
    FOREIGN KEY (noticia_id) REFERENCES Noticia(noticia_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
/*caso de uso 02*/
create table Comentarios(
    user_id INT,
    noticia_id INT,
    comment VARCHAR(200),
    FOREIGN KEY (noticia_id) REFERENCES Noticia(noticia_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)  
);
