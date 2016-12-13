<?php
$pageIndex = $_GET['pageIndex'];
$category = $_GET['category'];

if($category == 'pd'){
	switch ($pageIndex) {
		case '1':
			?>
			{
				"list": [{
					"name": "和秋叶一起学职场技能", 
					"bigPhotoUrl": "./wyimg/01.jpg",
					"provider": "秋叶",
					"learnerCount": "111",
					"price": "1111"
				}]
			}
			<?
			break;
		case '2':
			?>
			{
				"list": [{
					"name": "和秋叶一起学职场技能", 
					"bigPhotoUrl": "./wyimg/02.png",
					"provider": "秋叶",
					"learnerCount": "222",
					"price": "2222"
				}]
			}
			<?
			break;
		case '3':
			?>
			{
				"list": [{
					"name": "和秋叶一起学职场技能", 
					"bigPhotoUrl": "./wyimg/03.jpg",
					"provider": "秋叶",
					"learnerCount": "333",
					"price": "3333"
				}]
			}
			<?
			break;
	}
}

if($category == 'pl'){
	switch ($pageIndex) {
		case '1':
			?>
			{
				"list": [{
					"name": "和秋叶一起学职场技能", 
					"bigPhotoUrl": "./wyimg/04.jpg",
					"provider": "秋叶",
					"learnerCount": "444",
					"price": "4444"
				}]
			}
			<?
			break;
		case '2':
			?>
			{
				"list": [{
					"name": "和秋叶一起学职场技能", 
					"bigPhotoUrl": "./wyimg/05.png",
					"provider": "秋叶",
					"learnerCount": "555",
					"price": "5555"
				}]
			}
			<?
			break;
		case '3':
			?>
			{
				"list": [{
					"name": "和秋叶一起学职场技能", 
					"bigPhotoUrl": "./wyimg/06.jpg",
					"provider": "秋叶",
					"learnerCount": "666",
					"price": "6666"
				}]
			}
			<?
			break;
	}
}



