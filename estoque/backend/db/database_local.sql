
use crud;

CREATE TABLE `Systems` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Namespace` varchar(100) NOT NULL,
  `Type` varchar(100) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `QaPageId` varchar(20) NOT NULL,
  `Solution` varchar(100) NOT NULL,
  `Platform` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=220 DEFAULT CHARSET=latin1;



SELECT * FROM systems;			


/**CREATE TABLE tbl_login(

id_usuario int auto_increment primary key not null,
usuario varchar(50) not null,
senha varchar(50) not null
);

**/


/*INSERT INTO tbl_login(usuario, senha)
VALUES
('admin@2021', '!shurias2');

*/

select *  from tbl_login;

 
