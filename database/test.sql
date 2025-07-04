 /* CREATE TABLE */
CREATE TABLE IF NOT EXISTS building_info_tb (
    id SERIAL PRIMARY KEY,
    qtd_sw INTEGER,
    build_name VARCHAR(200),
    build_number INTEGER,
    lnglat VARCHAR(50),
    switchs TEXT
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    1,'172.24.0.91','PORTARIA','-59.9872067815108, -3.094510349441545',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    2,'172.23.0.15, 172.23.0.42','LABORATORIO DE CIENCIAS DA SAUDE II','-59.987674922199425, -3.0940981249634403',2
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    3,'10.2.12.11, 10.2.12.12','COADI','-59.98829585534966, -3.0941326127773707',2
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    5,'172.21.0.39','BIBLIOTECA','-59.98890276993796, -3.094034132922411',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    7,'172.21.0.19','BIBLIOTECA ADMINISTRATIVO','-59.988895183505605, -3.0937917209327814',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    9,'172.21.0.47','TELEFONIA','-59.98927829833947, -3.094250031054017',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    11,'172.77.0.11, 172.21.0.45, 10.2.8.11, 10.2.8.21, 10.2.8.31, 10.2.0.2, 10.8.0.1, 10.2.0.3, 10.3.0.1, 172.20.0.2','COTIN','-59.989079901294424, -3.0944480396070695',10
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    15,'172.36.0.11, 172.36.0.13, 172.36.0.12, 172.23.0.11','ENGENHARIA - COATL/CPPF','-59.98905763395215, -3.0948153595335572',4
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    16,'172.23.0.12','PRODUTOS FLORESTAIS - CPPF','-59.988372296508516, -3.094869474775699',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    21,'172.23.0.17','LABORATORIO DE PEQUENOS OBJETOS DE MADEIRA 1','-59.98883900085385, -3.0955122658570318',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    23,'172.23.0.16','LABORATORIO DE PEQUENOS OBJETOS DE MADEIRA 3','-59.98856541554796, -3.0955176224477254',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    30,'172.27.0.16','LABORATORIO DE CELULOSE E PAPEL','-59.98829337271527, -3.0958546648957865',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    31,'172.21.0.20, 172.21.0.40','LABORATORIO DE CIENCIA DA SAUDE I','-59.988263700123326, -3.0944832506384743',2
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    35,'172.30.0.11, 172.30.0.21, 172.30.0.31, 172.30.0.41, 172.30.0.51, 172.30.0.2','DIRETORIA','-59.9877507314906, -3.095151819603418',6
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    36,'172.24.0.31','LABORATORIO DE BOTANICA 1','-59.98727795528501, -3.095383707671965',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    38,'172.24.0.2, 172.24.0.41','HERBARIO','-59.987186361002806, -3.0947848929507993',2
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    39,'172.24.0.11','HERBARIO 1','-59.986898397615356, -3.09537939999944',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    40,'172.24.0.21','HERBARIO 2','-59.986854775629325, -3.095530907272479',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    42,'172.24.0.71','INVENTARIO FLORISTICO - IFL','-59.98723409724702, -3.095572571768769',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    43,'172.27.0.50, 172.27.0.49','INCUBADORA','-59.98770811408306, -3.095950553612235',2
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    44,'172.27.0.25','LABORATORIO DE RECURSOS HIDRICOS','-3.095950553612235, -59.98770811408306',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    47,'172.27.0.37','VIDRAÇARIA','-59.988195477539215, -3.0963786328623577',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    53,'172.27.0.2, 172.27.0.11, 172.27.0.12, 172.27.0.23','CPPN','-59.98800753077348, -3.0965626253810976',4
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    54,'172.27.0.14','BIOTEC','-59.988184421847116, -3.096809175306081',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    57,'172.27.0.18','TANQUE DOS PEIXES-BOI','-59.987642692921035, -3.0971698004788597',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    60,'172.27.0.21','LFCE','-59.98749955540162, -3.097690278487687',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    61,'172.27.0.19','LABGEN','-59.98747870858868, -3.0978516052131195',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    62,'172.27.0.47','LABDUAMB','-59.98733799260126, -3.0979400746972683',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    63,'172.27.0.17, 172.27.0.29, 172.27.0.27','LEEM1-3','-59.98715496132865, -3.098102892380707',3
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    65,'172.27.0.13','RADIOPROT','-59.98699991432975, -3.098460956090872',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    70,'172.22.0.19','CASA_CIENCIA','-59.9866495595077, -3.0974028693672877',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    73,'172.22.0.34','AUD','-59.986134575402524, -3.0974135825295543',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    80,'172.22.0.13','CEQUA','-59.984224842679126, -3.099545499662042',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    86,'172.22.0.17','GPA','-59.98510997160992, -3.0973225206468595',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    90,'172.22.0.27','BIOTERIO','-59.98529236181383, -3.096851141364284',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    93,'172.22.0.26','MAX_PLANCK','-59.98678903436953, -3.096181568159021',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    97,'172.24.0.81','EDITORA','-59.986497546986435, -3.0956543541632637',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    100,'172.22.0.12','COCIN','-59.98643036286611, -3.096039342675287',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    101,'172.22.0.14, 172.22.0.20, 172.22.0.11, 172.22.0.12, 172.22.0.12','COPEC1-2/C1/SIGLAB','-59.98643697634979, -3.0963122143691013',5
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    102,'172.21.0.22','RESIDENCIA1','-59.986134575402524, -3.096342265766894',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    104,'172.22.0.18, 172.22.0.28','SEC_POS','-59.986134575402524, -3.096058366643144',2
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    106,'172.25.0.51','LABORATÓRIO DE ESTÚDIOS SOCIAIS-LAB. MAX-PLANCK','-59.98614477788199, -3.095813436758102',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    107,'172.24.0.61','NPCHS-NUCLEO DE PESQ CIÊNCIAS HUMANAS SOCIAIS','-59.98616753717905, -3.0955331483606945',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    109,'172.24.0.101, 172.24.0.102, 172.24.0.103','COCAP - COODENAÇÃO DE CAPTAÇÃO','-59.98688066182484, -3.0949043930372238',3
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    111,'172.26.0.20, 172.26.0.14','PORTARIA','-59.989487886809655, -3.095249521521763',2
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    112,'172.26.0.11, 172.26.0.33, 172.26.0.41','COL1L','-59.98614773118018, -3.096281581634332',3
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    117,'10.2.16.12','LBA','-59.99043628940666, -3.0956295615691967',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    120,'172.26.0.21','TEAM','-59.98989021814182, -3.0958601728392443',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    124,'172.26.0.16','INSETOS','-59.98967295922245, -3.096106575902764',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    125,'172.25.0.11, 172.25.0.29, 172.25.0.30, 172.25.0.30 OU 31, 172.25.0.40, 172.25.0.32','LABORATORIO DE BIOLOGIA AQUATICA','-59.98938690084054, -3.0955808311319024',6
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    130,'172.25.0.12','POS-GRADUAÇÃO - GENETICA','-59.988605498284095, -3.096982272328962',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    133,'10.28.0.14','BIOLOGIA MOLECULAR','-59.98871076989839, -3.0967474006412274',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    134,'172.26.0.2, 172.26.0.55, 172.26.0.65','COLEÇÕES','-59.988565206954526, -3.0969448815483496',3
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    137,'172.28.0.21','ANEXOECO','-59.99370947463043, -3.0930429583974623',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    139,'172.28.0.24','PPGECO','-59.99369143095176, -3.0927772018068937',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    140,'172.28.0.37','POSATU2','-59.993547081522436, -3.092718645261044',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    141,'172.28.0.23','LAB','-59.993461374048785, -3.092205149258866',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    144,'172.28.0.17','CPTA','-59.99364181083543, -3.0917051660704975',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    145,'172.28.0.16','POSATU1','-59.993858334979414, -3.091835792331643',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    149,'172.28.0.2, 172.28.0.11, 172.28.0.12, 172.28.0.13, 172.28.0.14, 172.28.0.15','CPST1-5','-59.99328093726213, -3.0919484011645495',6
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    151,'172.28.0.27','NBAA1','-59.99314109875247, -3.0922907319431556',2
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    152,'172.28.0.38','CFBV','-59.99305539127881, -3.0922907319431556',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    153,'172.28.0.36','NBAA2','-59.99319198179888, -3.092372642558863',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    155,'172.28.0.20, 172.28.0.33, 172.28.0.34, 172.28.0.35, 172.28.0.33, 172.28.0.34, 172.28.0.35','MANFLOR1-4','-59.99295615104615, -3.0922186623147407',7
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    157,'172.28.0.26','LAB','-59.99284464098458, -3.092408677368459',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    159,'172.28.0.25','CATL','-59.992763444430594, -3.092129407562111',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    160,'172.28.0.28','CENBAM','-59.992916815699246, -3.091827615914512',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    161,'172.28.0.31','CASASEMENTE','-59.993097252485896, -3.09143123272454',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    163,'172.28.0.18, 172.28.0.29, 172.28.0.30, 172.28.0.18','CPAC','-59.99291230477957, -3.0913906935263085',4
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    169,'172.28.0.22','CTPETRO','-59.99361600824752, -3.090638465900298',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    170,'172.28.0.32','LAFAP','-59.993769379516166, -3.0910033188873056',1
);

/* INSERT QUERY */
INSERT INTO building_info_tb( build_number,switchs,build_name,lnglat,qtd_sw )
VALUES
(
    175,'172.28.0.19','CPAQ','-59.99407161113561, -3.0902691084278127',1
);
