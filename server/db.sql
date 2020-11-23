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
/*
name_tag
    0 nacionales
    1 internacionales
    2 variados 
    3 espectaculos
    4 deportivos
*/

create table Noticia(
    noticia_id  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
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
    email_user VARCHAR(65)
);

create table Periodistas(
    periodista_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    alias  VARCHAR(45),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

/****************************** CASO DE USO **********************************/

/*caso de uso 01  - like dislike*/

create table typeMetrics(
    typeMetric_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_type VARCHAR(20)
);
/*
name_type
    vista a la notica 
    interaccion de like a la noticia
    interaccion de dislike a la noticia  
*/

create table MetricsNoticia(
    metric_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    typeMetric_id INT NOT NULL,
    is_user boolean,
    FOREIGN KEY (typeMetric_id) REFERENCES typeMetrics(typeMetric_id)
);

create table typeInteractionNoticia(
    type_interaction_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_interaction VARCHAR(20)
);
/*
name_interaction 
    like 
    dislike
*/

create table InteractionNoticia(
    like_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    noticia_id INT NOT NULL,
    type_interaction_id INT NOT NULL,
    FOREIGN KEY (type_interaction_id) REFERENCES typeInteractionNoticia(type_interaction_id),
    FOREIGN KEY (noticia_id) REFERENCES Noticia(noticia_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

/*caso de uso 02*/
create table Comentarios(
    comment_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    noticia_id INT,
    comment VARCHAR(200),
    FOREIGN KEY (noticia_id) REFERENCES Noticia(noticia_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)  
);


/************  Business Model **************/

create table BusinessModel_Noticia(
    bm_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    noticia_id INT NOT NULL,
    is_bm boolean,
    FOREIGN KEY (noticia_id) REFERENCES Noticia(noticia_id)
);