
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var mouse
var mouse_down,mouse_img2,mouse_left,mouse_right,mouse_still,mouse_up
var capsule_img

function preload()
{
	mouse_up   = loadAnimation("1.png","2.png","3.png","4.png","5.png")
	mouse_down   = loadAnimation("d1.png","d2.png","d3.png","d4.png","d5.png")
	mouse_right   = loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png")
	mouse_left     = loadAnimation("l1.png","l2.png","l3.png","l4.png","l5.png")
	mouse_img2= loadAnimation("1.png","1.png")
	capsule_img=loadImage("capsule.png")
	cheese_img=loadImage("cheese.png")
	
}

function setup() {
	createCanvas(displayWidth,displayHeight-200);

	engine = Engine.create();
	world = engine.world;

	mouse = createSprite(798,600,20,20)
	mouse.scale=0.30
	mouse.addAnimation("mouse_still",mouse_img2)
	mouse.addAnimation("mouseu",mouse_up)
	mouse.addAnimation("moused",mouse_down)
	mouse.addAnimation("mouser",mouse_right)
	mouse.addAnimation("mousel",mouse_left)

	wall = createSprite(displayWidth/2,2,displayWidth,10);
	wall.shapeColor="red"
	wall2 = createSprite(displayWidth/4-15,650,displayWidth/2-15,10);
	wall2.shapeColor="red"
	wall3 = createSprite(displayWidth-320,650,displayWidth/2-15,10);
	wall3.shapeColor="red"
	wall4 = createSprite(750,630,10,50);
	wall4.shapeColor="red"
	wall5 = createSprite(840,630,10,50);
	wall5.shapeColor="red"
 //START GAME LETTER
	wall6 = createSprite(displayWidth/4-20,300,10,200);
	wall6.shapeColor="darkorange"
	wall7 = createSprite(displayWidth/4+50,200,150,10);
	wall7.shapeColor="darkorange"
	wall8 = createSprite(displayWidth/4+50,400,150,10);
	wall8.shapeColor="darkorange"
	wall9 = createSprite(displayWidth/4+125,355,10,100);
	wall9.shapeColor="darkorange"

	
	wall10 = createSprite(displayWidth/4+200,300,10,200);
	wall10.shapeColor=" darkmagenta"
	wall11 = createSprite(displayWidth/4+270,200,150,10);
	wall11.shapeColor=" darkmagenta"
	wall12 = createSprite(displayWidth/4+270,300,150,10);
	wall12.shapeColor=" darkmagenta"
	wall13= createSprite(displayWidth/4+340,300,10,200);
	wall13.shapeColor=" darkmagenta"

	wall14 = createSprite(displayWidth/4+400,300,10,200);
	wall14.shapeColor="green"
	wall15 = createSprite(displayWidth/4+470,200,150,10);
	wall15.shapeColor="green"
	wall16 = createSprite(displayWidth/4+475,250,10,100);
	wall16.shapeColor="green"
	wall17= createSprite(displayWidth/4+540,300,10,200);
	wall17.shapeColor="green"

	wall18 = createSprite(displayWidth/4+600,300,10,200);
	wall18.shapeColor="blue"
	wall19 = createSprite(displayWidth/4+670,200,150,10);
	wall19.shapeColor=" blue"
	wall20 = createSprite(displayWidth/4+675,300,150,10);
	wall20.shapeColor=" blue"
	wall21 = createSprite(displayWidth/4+670,400,150,10);
	wall21.shapeColor=" blue"
//END GAME LETTER
    wall22 = createSprite(displayWidth/8-190,2,10,displayWidth);
	wall22.shapeColor="red"
	wall23 = createSprite(displayWidth,2,10,displayWidth);
	wall23.shapeColor="red"

	
	
	capsule=createSprite(20,200,20,20);
	capsule.addImage("capsule",capsule_img)
	capsule.scale=0.5
	capsule2=createSprite(1520,210,20,20);
	capsule2.addImage("capsule",capsule_img)
	capsule2.scale=0.5
	capsule3=createSprite(20,500,20,20);
	capsule3.addImage("capsule",capsule_img)
	capsule3.scale=0.5
	capsule4=createSprite(1520,510,20,20);
	capsule4.addImage("capsule",capsule_img)
	capsule4.scale=0.5

	//cheese
	 //1
	cheese =  createSprite(35,30)
	cheese2 =  createSprite(95,30)
	cheese3 =  createSprite(155,30)
	cheese4=  createSprite(215,30)
	cheese5 =  createSprite(275,30)
	cheese6 =  createSprite(335,30) 
	cheese7 =  createSprite(395,30)
	cheese8 =  createSprite(455,30)
	cheese9 =  createSprite(515,30)
	cheese10 =  createSprite(575,30)
	cheese11=  createSprite(635,30)
	cheese12=  createSprite(695,30)
	cheese13 =  createSprite(755,30)
	cheese14 =  createSprite(815,30)
	cheese15 =  createSprite(875,30)
	cheese16 =  createSprite(935,30)
	cheese17 =  createSprite(995,30)
	cheese18=  createSprite(1055,30)
	cheese19=  createSprite(1115,30)
	cheese20 =  createSprite(1175,30)
	cheese21=  createSprite(1235,30)
	cheese22=  createSprite(1295,30)
	cheese23=  createSprite(1355,30)
	cheese24=  createSprite(1415,30)
	cheese25 =  createSprite(1475,30)
cheese .addImage("img",cheese_img)
cheese2.addImage("img",cheese_img)
cheese3.addImage("img",cheese_img)
cheese4.addImage("img",cheese_img)
cheese5.addImage("img",cheese_img)
cheese6.addImage("img",cheese_img)
cheese7.addImage("img",cheese_img)
cheese8.addImage("img",cheese_img)
cheese9.addImage("img",cheese_img)
cheese10.addImage("img",cheese_img)
cheese11.addImage("img",cheese_img)
cheese12.addImage("img",cheese_img)
cheese13.addImage("img",cheese_img)
cheese14.addImage("img",cheese_img)
cheese15.addImage("img",cheese_img)
cheese16.addImage("img",cheese_img)
cheese17.addImage("img",cheese_img)
cheese18.addImage("img",cheese_img)
cheese19.addImage("img",cheese_img)
cheese20.addImage("img",cheese_img)
cheese21.addImage("img",cheese_img)
cheese22.addImage("img",cheese_img)
cheese23.addImage("img",cheese_img)
cheese24.addImage("img",cheese_img)
cheese25.addImage("img",cheese_img)
cheese.scale=0.2
cheese2.scale=0.2
cheese3.scale=0.2
cheese4.scale=0.2
cheese5.scale=0.2
cheese6.scale=0.2
cheese7.scale=0.2
cheese8.scale=0.2
cheese9.scale=0.2
cheese10.scale=0.2
cheese11.scale=0.2
cheese12.scale=0.2
cheese13.scale=0.2
cheese14.scale=0.2
cheese15.scale=0.2
cheese16.scale=0.2
cheese17.scale=0.2
cheese18.scale=0.2
cheese19.scale=0.2
cheese20.scale=0.2
cheese21.scale=0.2
cheese22.scale=0.2
cheese23.scale=0.2
cheese24.scale=0.2
cheese25.scale=0.2
	
	//2
	cheese26 = createSprite(35,95)
	cheese26.addImage("img2",cheese_img)
	cheese27 = createSprite(95,95)
	cheese27.addImage("img2",cheese_img)
	cheese28 = createSprite(155,95)
	cheese28.addImage("img2",cheese_img)
	cheese29= createSprite(215,95)
	cheese29.addImage("img2",cheese_img)
	cheese30 = createSprite(275,95)
	cheese30.addImage("img2",cheese_img)
	cheese31 = createSprite(335,95)
	cheese31.addImage("img2",cheese_img)
	cheese32 = createSprite(395,95)
	cheese32.addImage("img2",cheese_img)
	cheese33 = createSprite(455,95)
	cheese33.addImage("img2",cheese_img)
	cheese34 = createSprite(515,95)
	cheese34.addImage("img2",cheese_img)
	cheese35 = createSprite(575,95)
	cheese35.addImage("img2",cheese_img)
	cheese36= createSprite(635,95)
	cheese36.addImage("img2",cheese_img)
	cheese37= createSprite(695,95)
	cheese37.addImage("img2",cheese_img)
	cheese38 = createSprite(755,95)
	cheese38.addImage("img2",cheese_img)
	cheese39 = createSprite(815,95)
	cheese39.addImage("img2",cheese_img)
	cheese40 = createSprite(875,95)
	cheese40.addImage("img2",cheese_img)
	cheese41 = createSprite(935,95)
	cheese41.addImage("img2",cheese_img)
	cheese42 = createSprite(995,95)
	cheese42.addImage("img2",cheese_img)
	cheese43= createSprite(1055,95)
	cheese43.addImage("img2",cheese_img)
	cheese44= createSprite(1115,95)
	cheese44.addImage("img2",cheese_img)
	cheese45 = createSprite(1175,95)
	cheese45.addImage("img2",cheese_img)
	cheese46= createSprite(1235,95)
	cheese46.addImage("img2",cheese_img)
	cheese47= createSprite(1295,95)
	cheese47.addImage("img2",cheese_img)
	cheese48= createSprite(1355,95)
	cheese48.addImage("img2",cheese_img)
	cheese49= createSprite(1435,95)
	cheese49.addImage("img2",cheese_img)
	cheese50= createSprite(1495,95)
	cheese50.addImage("img2",cheese_img)
	cheese26
cheese26.scale=0.2
cheese27.scale=0.2
cheese28.scale=0.2
cheese29.scale=0.2
cheese30.scale=0.2
cheese31.scale=0.2
cheese32.scale=0.2
cheese33.scale=0.2
cheese34.scale=0.2
cheese35.scale=0.2
cheese36.scale=0.2
cheese37.scale=0.2
cheese38.scale=0.2
cheese39.scale=0.2
cheese40.scale=0.2
cheese41.scale=0.2
cheese42.scale=0.2
cheese43.scale=0.2
cheese43.scale=0.2
cheese44.scale=0.2
cheese45.scale=0.2
cheese46.scale=0.2
cheese47.scale=0.2
cheese48.scale=0.2
cheese49.scale=0.2
cheese50.scale=0.2

	//3
	
	cheese51 = createSprite(35,155)
	cheese51.addImage("img3",cheese_img)
	cheese52 = createSprite(95,155)
	cheese52.addImage("img3",cheese_img)
	cheese53 = createSprite(155,155)
	cheese53.addImage("img3",cheese_img)
	cheese54= createSprite(215,155)
	cheese54.addImage("img3",cheese_img)
	cheese55 = createSprite(275,155)
	cheese55.addImage("img3",cheese_img)
	cheese56 = createSprite(335,155)
	cheese56.addImage("img3",cheese_img)
	cheese57 = createSprite(395,155)
	cheese57.addImage("img3",cheese_img)
	cheese58 = createSprite(455,155)
	cheese58.addImage("img3",cheese_img)
	cheese59 = createSprite(515,155)
	cheese59.addImage("img3",cheese_img)
	cheese60 = createSprite(575,155)
	cheese60.addImage("img3",cheese_img)
	cheese61= createSprite(635,155)
	cheese61.addImage("img3",cheese_img)
	cheese62= createSprite(695,155)
	cheese62.addImage("img3",cheese_img)
	cheese63 = createSprite(755,155)
	cheese63.addImage("img3",cheese_img)
	cheese64 = createSprite(815,155)
	cheese64.addImage("img3",cheese_img)
	cheese65 = createSprite(875,155)
	cheese65.addImage("img3",cheese_img)
	cheese66 = createSprite(935,155)
	cheese66.addImage("img3",cheese_img)
	cheese67 = createSprite(995,155)
	cheese67.addImage("img3",cheese_img)
	cheese68= createSprite(1055,155)
	cheese68.addImage("img3",cheese_img)
	cheese69= createSprite(1115,155)
	cheese69.addImage("img3",cheese_img)
	cheese70 = createSprite(1175,155)
	cheese70.addImage("img3",cheese_img)
	cheese71= createSprite(1235,155)
	cheese71.addImage("img3",cheese_img)
	cheese72= createSprite(1295,155)
	cheese72.addImage("img3",cheese_img)
	cheese73= createSprite(1355,155)
	cheese73.addImage("img3",cheese_img)
	cheese74= createSprite(1415,155)
	cheese74.addImage("img3",cheese_img)
	cheese75 = createSprite(1475,155)
	cheese75.addImage("img3",cheese_img)
	cheese51
cheese52.scale=0.2
cheese53.scale=0.2
cheese54.scale=0.2
cheese55.scale=0.2
cheese56.scale=0.2
cheese57.scale=0.2
cheese58.scale=0.2
cheese59.scale=0.2
cheese60.scale=0.2
cheese61.scale=0.2
cheese62.scale=0.2
cheese63.scale=0.2
cheese64.scale=0.2
cheese65.scale=0.2
cheese66.scale=0.2
cheese67.scale=0.2
cheese68.scale=0.2
cheese69.scale=0.2
cheese70.scale=0.2
cheese71.scale=0.2
cheese72.scale=0.2
cheese73.scale=0.2
cheese74.scale=0.2
cheese75.scale=0.2

	//4
	
	cheese77 = createSprite(90,215)
	cheese77.addImage("img3",cheese_img)
	cheese78 = createSprite(150,215)
	cheese78.addImage("img3",cheese_img)
	cheese79= createSprite(210,215)
	cheese79.addImage("img3",cheese_img)
	cheese80 = createSprite(270,215)
	cheese80.addImage("img3",cheese_img)
	cheese81 = createSprite(330,215)
	cheese81.addImage("img3",cheese_img)
	cheese84 = createSprite(545,215)
	cheese84.addImage("img3",cheese_img)
	cheese88 = createSprite(755,215)
	cheese88.addImage("img3",cheese_img)
	cheese91 = createSprite(955,215)
	cheese91.addImage("img3",cheese_img)
	cheese95= createSprite(1170,215)
	cheese95.addImage("img3",cheese_img)
	cheese96= createSprite(1230,215)
	cheese96.addImage("img3",cheese_img)
	cheese97= createSprite(1290,215)
	cheese97.addImage("img3",cheese_img)
	cheese98= createSprite(1350,215)
	cheese98.addImage("img3",cheese_img)
	cheese99= createSprite(1410,215)
	cheese99.addImage("img3",cheese_img)
	cheese100= createSprite(1470,215)
	cheese100.addImage("img3",cheese_img)
	cheese77.scale=0.2
	cheese78.scale=0.2
	cheese79.scale=0.2
	cheese80.scale=0.2
	cheese81.scale=0.2
	cheese82.scale=0.2
	cheese83.scale=0.2
	cheese84.scale=0.2
	cheese85.scale=0.2
	cheese86.scale=0.2
	cheese87.scale=0.2
	cheese88.scale=0.2
	cheese89.scale=0.2
	cheese90.scale=0.2
	cheese91.scale=0.2
	cheese92.scale=0.2
	cheese93.scale=0.2
	cheese94.scale=0.2
	cheese95.scale=0.2
	cheese96.scale=0.2
	cheese97.scale=0.2
	cheese98.scale=0.2
	cheese99.scale=0.2
	cheese100.scale=0.2

	//5
	cheese101f = createSprite(30,275)
	cheese101f.addImage("image",cheese_img)
	cheese101 = createSprite(90,275)
	cheese101.addImage("image",cheese_img)
	cheese102= createSprite(150,275)
	cheese102.addImage("image",cheese_img)
	cheese103= createSprite(210,275)
	cheese103.addImage("image",cheese_img)
	cheese104 = createSprite(270,275)
	cheese104.addImage("image",cheese_img)
	cheese105= createSprite(330,275)
	cheese105.addImage("image",cheese_img)
	cheese106= createSprite(545,275)
	cheese106.addImage("image",cheese_img)
	cheese107	= createSprite(755,275)
	cheese107.addImage("image",cheese_img)
	cheese107b= createSprite(400,275)
	cheese107b.addImage("image",cheese_img)
	cheese108b= createSprite(475,275)
	cheese108b.addImage("image",cheese_img)
	cheese109b= createSprite(820,275)
	cheese109b.addImage("image",cheese_img)
	cheese110b= createSprite(890,275)
	cheese110b.addImage("image",cheese_img)
	cheese111b= createSprite(1015,275)
	cheese111b.addImage("image",cheese_img)
	cheese112b= createSprite(1080,275)
	cheese112b.addImage("image",cheese_img)
	cheese108= createSprite(955,275)
	cheese108.addImage("image",cheese_img)
	cheese109= createSprite(1170,275)
	cheese109.addImage("image",cheese_img)
	cheese110= createSprite(1230,275)
	cheese110.addImage("image",cheese_img)
	cheese111= createSprite(1290,275)
	cheese111.addImage("image",cheese_img)
	cheese112= createSprite(1350,275)
	cheese112.addImage("image",cheese_img)
	cheese113 =createSprite(1410,275)
	cheese113.addImage("image",cheese_img)
	cheese114= createSprite(1470,275)
	cheese114.addImage("image",cheese_img)
	

cheese101f.scale=0.2
cheese101.scale=0.2
cheese102.scale=0.2
cheese103.scale=0.2
cheese104.scale=0.2
cheese105.scale=0.2
cheese106.scale=0.2
cheese107.scale=0.2
cheese107b.scale=0.2
cheese108b.scale=0.2
cheese109b.scale=0.2
cheese110b.scale=0.2
cheese111b.scale=0.2
cheese112b.scale=0.2
cheese108.scale=0.2
cheese109.scale=0.2
cheese110.scale=0.2
cheese111.scale=0.2
cheese112.scale=0.2
cheese113.scale=0.2
cheese114.scale=0.2


	//6
	/*
	cheese115f = createSprite(30,335)
	cheese115f.addImage("image",cheese_img)
	cheese115 = createSprite(90,335)
	cheese115.addImage("image",cheese_img)
	cheese116= createSprite(150,335)
	cheese116.addImage("image",cheese_img)
	cheese117= createSprite(210,335)
	cheese117.addImage("image",cheese_img)
	cheese118 = createSprite(270,335)
	cheese118.addImage("image",cheese_img)
	cheese119= createSprite(330,335)
	cheese119.addImage("image",cheese_img)
	cheese120= createSprite(545,335)
	cheese120.addImage("image",cheese_img)
	cheese121	= createSprite(755,335)
	cheese121.addImage("image",cheese_img)
	cheese122= createSprite(400,335)
	cheese122.addImage("image",cheese_img)
	cheese123= createSprite(475,335)
	cheese123.addImage("image",cheese_img)
	cheese124= createSprite(820,335)
	cheese124.addImage("image",cheese_img)
	cheese125= createSprite(890,335)
	cheese125.addImage("image",cheese_img)
	cheese126= createSprite(1015,335)
	cheese126.addImage("image",cheese_img)
	cheese127= createSprite(1080,335)
	cheese127.addImage("image",cheese_img)
	cheese128= createSprite(955,335)
	cheese128.addImage("image",cheese_img)
	cheese129= createSprite(1170,335)
	cheese129.addImage("image",cheese_img)
	cheese130= createSprite(1230,335)
	cheese130.addImage("image",cheese_img)
	cheese131= createSprite(1290,335)
	cheese131.addImage("image",cheese_img)
	cheese132= createSprite(1350,335)
	cheese132.addImage("image",cheese_img)
	cheese133 =createSprite(1410,335)
	cheese133.addImage("image",cheese_img)
	cheese134= createSprite(1470,335)
	cheese134.addImage("image",cheese_img)
	//7
	cheese135f = createSprite(30,395)
	cheese135f.addImage("image",cheese_img)
	cheese135 = createSprite(90,395)
	cheese135.addImage("image",cheese_img)
	cheese136= createSprite(150,395)
	cheese136.addImage("image",cheese_img)
	cheese137= createSprite(210,395)
	cheese137.addImage("image",cheese_img)
	cheese138 = createSprite(270,395)
	cheese138.addImage("image",cheese_img)
	cheese139= createSprite(330,395)
	cheese139.addImage("image",cheese_img)
	cheese140 = createSprite(545,395)
	cheese140.addImage("image",cheese_img)
	cheese141b= createSprite(610,395)
	cheese141b.addImage("image",cheese_img)
	cheese142b= createSprite(690,395)
	cheese142b.addImage("image",cheese_img)
	cheese141= createSprite(755,395)
	cheese141.addImage("image",cheese_img)
	cheese143b= createSprite(820,395)
	cheese143b.addImage("image",cheese_img)
	cheese144b= createSprite(890,395)
	cheese144b.addImage("image",cheese_img)
	cheese142 = createSprite(955,395)
	cheese142.addImage("image",cheese_img)
	cheese143= createSprite(1170,395)
	cheese143.addImage("image",cheese_img)
	cheese144= createSprite(1230,395)
	cheese144.addImage("image",cheese_img)
	cheese145= createSprite(1290,395)
	cheese145.addImage("image",cheese_img)
	cheese146= createSprite(1350,395)
	cheese146.addImage("image",cheese_img)
	cheese147= createSprite(1410,395)
	cheese147.addImage("image",cheese_img)
	cheese148= createSprite(1470,395)
	cheese148.addImage("image",cheese_img)
	//8
	cheese149 = createSprite(35,455)
	cheese149.addImage("image",cheese_img)
	cheese150 = createSprite(95,455)
	cheese150.addImage("image",cheese_img)
	cheese151 = createSprite(155,455)
	cheese151.addImage("image",cheese_img)
	cheese152= createSprite(215,455)
	cheese152.addImage("image",cheese_img)
	cheese153 = createSprite(275,455)
	cheese153.addImage("image",cheese_img)
	cheese154 = createSprite(335,455)
	cheese154.addImage("image",cheese_img)
	cheese155= createSprite(395,455)
	cheese155.addImage("image",cheese_img)
	cheese156= createSprite(455,455)
	cheese156.addImage("image",cheese_img)
	cheese157= createSprite(515,455)
	cheese157.addImage("image",cheese_img)
	cheese158 = createSprite(575,455)
	cheese158.addImage("image",cheese_img)
	cheese159= createSprite(635,455)
	cheese159.addImage("image",cheese_img)
	cheese160= createSprite(695,455)
	cheese160.addImage("image",cheese_img)
	cheese161 = createSprite(755,455)
	cheese161.addImage("image",cheese_img)
	cheese162 = createSprite(815,455)
	cheese162.addImage("image",cheese_img)
	cheese163 = createSprite(875,455)
	cheese163.addImage("image",cheese_img)
	cheese164= createSprite(935,455)
	cheese164.addImage("image",cheese_img)
	cheese165 = createSprite(995,455)
	cheese165.addImage("image",cheese_img)
	cheese166= createSprite(1055,455)
	cheese166.addImage("image",cheese_img)
	cheese167= createSprite(1115,455)
	cheese167.addImage("image",cheese_img)
	cheese168 = createSprite(1175,455)
	cheese168.addImage("image",cheese_img)
	cheese169= createSprite(1235,455)
	cheese169.addImage("image",cheese_img)
	cheese170= createSprite(1295,455)
	cheese170.addImage("image",cheese_img)
	cheese171= createSprite(1355,455)
	cheese171.addImage("image",cheese_img)
	cheese172= createSprite(1415,455)
	cheese172.addImage("image",cheese_img)
	cheese173 = createSprite(1475,455)
	cheese173.addImage("image",cheese_img)
	//9
	
	cheese175 = createSprite(95,515)
	cheese175.addImage("image",cheese_img)
	cheese176 = createSprite(155,515)
	cheese176.addImage("image",cheese_img)
	cheese177= createSprite(215,515)
	cheese177.addImage("image",cheese_img)
	cheese178 = createSprite(275,515)
	cheese178.addImage("image",cheese_img)
	cheese179= createSprite(335,515)
	cheese179.addImage("image",cheese_img)
	cheese180= createSprite(395,515)
	cheese180.addImage("image",cheese_img)
	cheese181 = createSprite(455,515)
	cheese181.addImage("image",cheese_img)
	cheese182 = createSprite(515,515)
	cheese182.addImage("image",cheese_img)
	cheese183 = createSprite(575,515)
	cheese183.addImage("image",cheese_img)
	cheese184= createSprite(635,515)
	cheese184.addImage("image",cheese_img)
	cheese185= createSprite(695,515)
	cheese185.addImage("image",cheese_img)
	cheese186 = createSprite(755,515)
	cheese186.addImage("image",cheese_img)
	cheese187 = createSprite(815,515)
	cheese187.addImage("image",cheese_img)
	cheese188 = createSprite(875,515)
	cheese188.addImage("image",cheese_img)
	cheese189 = createSprite(935,515)
	cheese189.addImage("image",cheese_img)
	cheese190= createSprite(995,515)
	cheese190.addImage("image",cheese_img)
	cheese191= createSprite(1055,515)
	cheese191.addImage("image",cheese_img)
	cheese192= createSprite(1115,515)
	cheese192.addImage("image",cheese_img)
	cheese193= createSprite(1175,515)
	cheese193.addImage("image",cheese_img)
	cheese194= createSprite(1235,515)
	cheese194.addImage("image",cheese_img)
	cheese195= createSprite(1295,515)
	cheese195.addImage("image",cheese_img)
	cheese196= createSprite(1355,515)
	cheese196.addImage("image",cheese_img)
	cheese197= createSprite(1415,515)
	cheese197.addImage("image",cheese_img)
	cheese198 = createSprite(1475,515)
	cheese198.addImage("image",cheese_img)*/

	Engine.run(engine);
  
}


function draw() {
//mouse.debug=true
  mouse.setCollider("circle",0,0,60)
  rectMode(CENTER);
  Engine.update(engine)
  background(0);
 
 //2
/*cheese26.display();
cheese27.display();
cheese28.display();
cheese29.display();
cheese30.display();
cheese31.display();
cheese32.display();
cheese33.display();
cheese34.display();
cheese35.display();
cheese36.display();
cheese37.display();
cheese38.display();
cheese39.display();
cheese40.display();
cheese41.display();
cheese42.display();
cheese43.display();
cheese44.display();
cheese45.display();
cheese46.display();
cheese47.display();
cheese48.display();
cheese49.display();
cheese50.display();
//3
cheese51.display();
cheese52.display();
cheese53.display();
cheese54.display();
cheese55.display();
cheese56.display();
cheese57.display();
cheese58.display();
cheese59.display();
cheese60.display();
cheese61.display();
cheese62.display();
cheese63.display();
cheese64.display();
cheese65.display();
cheese66.display();
cheese67.display();
cheese68.display();
cheese69.display();
cheese70.display();
cheese71.display();
cheese72.display();
cheese73.display();
cheese74.display();
cheese75.display();
//4

cheese77.display();
cheese78.display();
cheese79.display();
cheese80.display();
cheese81.display();
cheese84.display();
cheese88.display();
cheese91.display();
cheese95.display();
cheese96.display();
cheese97.display();
cheese98.display();
cheese99.display();
cheese100.display(); 

//5
cheese101f.display();
cheese101.display();
cheese102.display();
cheese103.display();
cheese104.display();
cheese105.display();
cheese106.display();
cheese107.display();
cheese107b.display();
cheese108b.display()
cheese109b.display();
cheese110b.display();
cheese111b.display();
cheese112b.display();
cheese107.display();
cheese108.display();
cheese109.display();
cheese110.display();
cheese111.display();
cheese112.display();
cheese113.display();
cheese114.display();
//6
cheese115f.display();
cheese115.display();
cheese116.display();
cheese117.display();
cheese118.display();
cheese119.display();
cheese120.display();
cheese121.display();
cheese122.display();
cheese123.display();
cheese124.display();
cheese125.display();
cheese126.display();
cheese127.display();
cheese128.display();
cheese129.display();
cheese130.display();
cheese131.display();
cheese132.display();
cheese133.display();
cheese134.display();
//7
cheese135f.display();
cheese135.display();
cheese136.display();
cheese137.display();
cheese138.display();
cheese139.display();
cheese140.display();
cheese141b.display();
cheese142b.display();
cheese141.display();
cheese142.display();
cheese143b.display();
cheese144b.display();
cheese143.display();
cheese144.display();
cheese145.display();
cheese146.display();
cheese147.display();
cheese148.display(); 
//8
cheese149.display();
cheese150.display();
cheese151.display();
cheese152.display();
cheese153.display();
cheese154.display();
cheese155.display();
cheese156.display();
cheese157.display();
cheese158.display();
cheese159.display();
cheese160.display();
cheese161.display();
cheese162.display();
cheese163.display();
cheese164.display();
cheese165.display();
cheese166.display();
cheese167.display();
cheese168.display();
cheese169.display();
cheese170.display();
cheese171.display();
cheese172.display();
cheese173.display();
//9
cheese175.display();
cheese176.display();
cheese177.display();
cheese178.display();
cheese179.display();
cheese180.display();
cheese181.display();
cheese182.display();
cheese183.display();
cheese184.display();
cheese185.display();
cheese186.display();
cheese187.display();
cheese188.display();
cheese189.display();
cheese190.display();
cheese191.display();
cheese192.display();
cheese193.display();
cheese194.display();
cheese195.display();
cheese196.display();
cheese197.display();
cheese198.display();*/

  if(keyIsDown(UP_ARROW)){
	  mouse.y-=10;
	  mouse.changeAnimation("mouseu",mouse_up)
  }

  else if(keyIsDown(RIGHT_ARROW)){
	mouse.x+=10;
	mouse.changeAnimation("mouser",mouse_right)
}

else if(keyIsDown(LEFT_ARROW)){
	mouse.x-=10;
	mouse.changeAnimation("mousel",mouse_left)
}

else if(keyIsDown(DOWN_ARROW)){
	mouse.y+=10;
	mouse.changeAnimation("moused",mouse_down)
}
else{
	mouse.changeAnimation("mouse_still",mouse_img2)
}
  
mouse.collide(wall);
mouse.collide(wall2);
mouse.collide(wall3);
mouse.collide(wall4);
mouse.collide(wall5);
mouse.collide(wall6);
mouse.collide(wall7);
mouse.collide(wall8);
mouse.collide(wall9);
mouse.collide(wall10);
mouse.collide(wall11);
mouse.collide(wall12);
mouse.collide(wall13);
mouse.collide(wall14);
mouse.collide(wall15);
mouse.collide(wall16);
mouse.collide(wall17);
mouse.collide(wall18);
mouse.collide(wall19);
mouse.collide(wall20);
mouse.collide(wall21);
mouse.collide(wall22);
mouse.collide(wall23);

//touching cheese
//createEdgeSprites();





  drawSprites();
 
}



