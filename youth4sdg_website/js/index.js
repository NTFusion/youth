/**
 * Created by ekko on 16/11/24.
 */

$(function(){
    $('.toPart1').click(function(){
        $('html,body').animate({scrollTop:$('.part1').offset().top-100+'px'}, 500);
    });
    $('.toPart2').click(function(){
        $('html,body').animate({scrollTop:$('.part2').offset().top-100+'px'}, 500);
    });
    $('.toPart3').click(function(){
        $('html,body').animate({scrollTop:$('.part3').offset().top-100+'px'}, 500);
    });
    $('.toPart4').click(function(){
        $('html,body').animate({scrollTop:$('.part4').offset().top-100+'px'}, 500);
    });
    $('.toPart5').click(function(){
        $('html,body').animate({scrollTop:$('.part5').offset().top-100+'px'}, 500);
    });
    $('.toPart6').click(function(){
        $('html,body').animate({scrollTop:$('.part6').offset().top-100+'px'}, 500);
    });
    $('.toPart7').click(function(){
        $('html,body').animate({scrollTop:$('.part7').offset().top-100+'px'}, 500);
    });



    $('.part2').find('.right-title span').hover(function(){
        $('.part2 .left-title span').removeClass('current');
        $('.part2 .right-title span').addClass('current');
        $('.part2 .right-body').addClass('hidden');
        $('.part2 .right-body-two').removeClass('hidden');
    },function(){

    });
    $('.part2').find('.left-title span').hover(function(){
        $('.part2 .right-title span').removeClass('current');
        $('.part2 .left-title span').addClass('current');
        $('.part2 .right-body').removeClass('hidden');
        $('.part2 .right-body-two').addClass('hidden');
    },function(){

    });

    $('.part4 .el-table').css('position','static');
    $('.part3 .el-table').css('position','static');



    $('.grid-model-right a img').css('height',$('.grid-model-group').height());



});

$('.carousel').carousel({ interval: 4000 });



$('.toRegister').on('click',function(){
    window.location.href="02_register.html";
});
$('.toLogin').on('click',function(){
    window.location.href="01_login.html";
});
$('.upload-Photo').click(function(){
    $(this).parent().find('input').trigger('click');
});
var aa = new Vue({
    el:'#index-page',
    data:{
        pageData1: [{
            actionName: 'Wenzhou Water Map',
            description: 'Village or suburb housewives mainly aging more than 40 in Chaoshan,Guangdong undertake mostly the work from factory so as to support family expenses and pass their time.This project aims to build an internet connection between enterprises and women workshops with the purpose of helping  the existing workshops to become self-employed households and enter the website.In order to make the scale more standard,to increase their income and protect their rights through training and reasonable order allocation,we union all the workshop to establish women organzation.Meanwhile, the intellectual life of women will be enriched and their awareness of law,hygiene and health,education and family rights will be strengthened by this organization. ',
            organization: 'Green Zhejiang Environmental Protection Organization',
            goal1: 'goals/1.png',
            goal2: 'goals/3.png',
            goal3: 'goals/4.png'
        },{
            actionName: 'Flowers do not speak Dessert Shop',
            description: 'Flowers do not speak Dessert Shop devotes itself to build a self-service and mutual aid platform for better social integration of hearing-impaired people. It is a dessert shop including food, dactylology culture popularization, sales of artwork creation by the deaf, free commonweal art lesson for hearing-impaired adolescent and so on, who combines the creative commonweal and business operation. ',
            organization: 'Flowers do not speak Dessert Shop',
            goal1: 'goals/1.png',
            goal2: 'goals/4.png',
            goal3: 'goals/8.png'
        },{
            actionName: "Rural Migrant Workers' Integration into City",
            description: 'The education problem of migrant workers’ children has become one of the unstable factors in society. Ying Drama Studio aims to help them get the opportunity of education equality through education drama and edutainment. At the same time, it dedicates itself to popularize again Tao Zhixing’s countryside education idea. At present, we not only open extra-curricular activities of education drama at rural migrant worker school in Jiading, Baoshan, Fengxian, but also give professional trainings to local teachers.',
            organization: 'Li Yingning Drama Studio',
            goal1: 'goals/4.png',
            goal2: 'goals/8.png',
            goal3: 'goals/10.png'
        }],
        pageData2: [{
            actionName: 'peole affected by AIDS',
            description: 'With the guidance of the experts studying Jingpo ethnicity, 20 students (including 10 students from Jingpo ethnicity) from Yunnan who are affected by AIDS will join and execute the Dehongzhou visiting project with the purpose of protecting Jingpo characters. The seminar, the material collection of Jingpo characters, home visiting and investigation, material collection of pictures and videos, final report are included in the activities. Through students’ work and fruit, we encourage the groups affected by AIDS to build up their confidence and give correct guidance to society to respect these groups and also pay attention to Jingpo language and culture so that we can make contributions to both nationality cultural protection and vulnerable groups.',
            organization: 'Chi Heng Foundation',
            goal1: 'goals/3.png',
            goal2: 'goals/10.png',
            goal3: 'goals/11.png'
        },{
            actionName: 'Water Conservation in Yunan Rural Community',
            description: 'With the development of economy and the severe problem of environment, our project choose the community village in remote minority district in Yunnan as the project site, especially the Xishuangbanna---after planting the rubber trees using plenty of chemical fertilizer causing the soil and water pollution. This project plans and implements the activities to strengthen the awareness of protecting water resource among local people and get involved in the behavior change of local people through learning the basic situation, the history and culture of water resource and also the facing problem. We can finally settle the water resource problem, making it more institutionalization and benign.  ',
            organization: 'Save The Children International',
            goal1: 'goals/6.png',
            goal2: 'goals/7.png',
            goal3: 'goals/11.png'
        },{
            actionName: 'Literacy Barrier',
            description: 'Wei Ning literacy barrier service center, an NGO aims to popularize the scientific knowledge about literacy barrier and offer the professional support services for literacy barrier children and their families, endeavors to make the whole society focus on literacy barrier. We introduce Hong Kong’s mature therapeutic plan and our directors are the experts of exceptional children education with rich experience. All of our trainers are enrolled as social workers and have been trained for over 6 months. Our center has offered services for more than 100 literacy barrier children, consulting services for over 2000 people and won the silver prize at group originality in commonweal project competition in 2012.',
            organization: 'Wei Ning Literacy Barrier Service Center',
            goal1: 'goals/4.png',
            goal2: 'goals/10.png',
            goal3: 'goals/16.png'
        }],
        pageData3: [{
            actionName: 'Elderly Care in Chengdu',
            description: 'Chengdu Longli old-age service agencies founded in 2011 is a comprehensiveness institute working for old-age services and social work. We introduce the advanced retirement welfare concept and management technique. We combine the actual situation at home and abroad in a market-based operation way in commonweal career, besides, we base upon Chengdu but face the whole country to develop socialization service industry. With 3 years development, we have become a comprehensiveness social service enterprise which takes the community retirement welfare as the core and also combines domestic retirement welfare, institute retirement welfare, information consulting and planning of retirement welfare industry, vacation retirement welfare and social workers’ services. It belongs to Chengdu Longli old-age service agencies, Chengdu Longli social worker’s center and Chengdu Longli retirement welfare information consulting Co.Ltd. ',
            organization: 'Chengdu Longli old-age service agencies',
            goal1: 'goals/3.png',
            goal2: 'goals/10.png',
            goal3: ''
        }],
        pageProjectData1: [{
            logo: 'img/96.gif',
            title: 'Youth4SDG Ambassador&Advocate',
            text: 'By participating in auditions, taking online courses and starting sustainble development actions, you can become the Youth Ambassador of SDGs and contribute to the spread and practice of SDGs.Youth4SDG Online Hub will provide the candidate with technical and youth network support.'
        },{
            logo: 'img/99.gif',
            title: 'Youth4SDG Hub',
            text: 'Youth4SDG Hub is a global network of youth groups and organizations that are interested in learning,advocating and acting for the Sustainable Development Goals. To become a Youth4SDG Hub partner, an organization will not only join this global network to share and work with others, but also be supported by Youth4SDG secretariat through a various of activities, information and training opportunities.'
        },{
            logo: 'img/101.gif',
            title: 'SDGs Online Courses',
            text: 'The first comprehensive online courses package on SDGs consist of sustainable development theories, toolkits and best practices showcasing how young people around the world can make concrete contribution to SDGs. The UN officials, pre-eminent experts on sustainable development, NGOs and business leaders will be invited as lecturers in the course videos.'
        },{
            logo: 'img/103.gif',
            title: 'Youth4SDG Leadship Camp',
            text: 'Youth4SDG Leadership Camp is an intensive training program where participants are expected to generate their own action plans of SDGs. Their actions target one or several Goals and is required to be actionable and accountable. The Camp also improve participants’ capabilities to take actions. The overall aim of the program is to incubate and accelerate youth’s actions on SDGs.'
        }],
        pageProjectData2: [{
            logo: 'img/104.png',
            title: 'Youth4SDG World Cup',
            text: 'No matter you are a high school student, university student or young entrepreneur, by building up a team and your projects on SDGs, you will have opportunity to compete with youth teams from all around the world and win a Youth4SDG World Cup at the UN headquarters in New York!'
        },{
            logo: 'img/105.png',
            title: 'MY World',
            text: "MY World is a global survey for citizens led by the United Nations and partners. It aims to capture people's voices, priorities and views, so that global leaders can be informed as they begin the process of defining the new development agenda for the world."
        }]
    },
    mounted: function () {

        $('#part3 .previous-page').click(function(){
            $('#part3').find('.action-wrapper.active-page').addClass('hidden');
            $('#part3').find('.action-wrapper.active-page').prev('.action-wrapper').removeClass('hidden');
            $('#part3').find('.action-wrapper.active-page').removeClass('active-page').prev('.action-wrapper').addClass('active-page');
            if($('#part3').find('.active-page.first-page').length > 0){
                $(this).attr('disabled','disabled');
            }
            else {
                $(this).removeAttr('disabled');
            };
            $('#part3 .next-page').removeAttr('disabled');
        });
        $('#part3 .next-page').click(function(){
            $('#part3').find('.action-wrapper.active-page').addClass('hidden');
            $('#part3').find('.action-wrapper.active-page').next('.action-wrapper').removeClass('hidden');
            $('#part3').find('.action-wrapper.active-page').removeClass('active-page').next('.action-wrapper').addClass('active-page');
            //console.log($('#part3').find('.active-page.last-page').length>0);
           if($('#part3').find('.active-page.last-page').length > 0){
                $(this).attr('disabled','disabled');
            }
            else {
                $(this).removeAttr('disabled');
            }
            $('#part3 .previous-page').removeAttr('disabled');
        });

        $('#part4 .previous-page').click(function(){
            $('#part4').find('.project-wrapper.active-page').addClass('hidden');
            $('#part4').find('.project-wrapper.active-page').prev('.project-wrapper').removeClass('hidden');
            $('#part4').find('.project-wrapper.active-page').removeClass('active-page').prev('.project-wrapper').addClass('active-page');
            if($('#part4').find('.active-page.first-page').length > 0){
                $(this).attr('disabled','disabled');
            }
            else {
                $(this).removeAttr('disabled');
            };
            $('#part4 .next-page').removeAttr('disabled');
        });
        $('#part4 .next-page').click(function(){
            $('#part4').find('.project-wrapper.active-page').addClass('hidden');
            $('#part4').find('.project-wrapper.active-page').next('.project-wrapper').removeClass('hidden');
            $('#part4').find('.project-wrapper.active-page').removeClass('active-page').next('.project-wrapper').addClass('active-page');
            //console.log($('#part3').find('.active-page.last-page').length>0);
            if($('#part4').find('.active-page.last-page').length > 0){
                $(this).attr('disabled','disabled');
            }
            else {
                $(this).removeAttr('disabled');
            }
            $('#part4 .previous-page').removeAttr('disabled');
        });

    }
});



L.mapbox.accessToken = 'pk.eyJ1IjoiaGFua2NoZXVuZyIsImEiOiJjaXh0dGdqODUwMDVqMzNuenQzc2l3dGVnIn0.6qn3X6EEZir1vOS703KAHA';
var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([37.57, 105.41], 2);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geoJson = [{
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [ 87.56, 43.84]},
    "properties": {
        "image": "photo/08.LiYunlong.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "李云龙",
        "city": "乌鲁木齐",
        "organization": "新疆警察学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
}, {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [106.70, 26.62]},
    "properties": {
        "image": "photo/06.ZhangShaoxiang.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "张绍香",
        "city": "贵阳",
        "organization": "贵州大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [113.30, 23.12]},
    "properties": {
        "image": "photo/10.ZhouHoulong.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "周厚龙",
        "city": "广州",
        "organization": "仲恺农业工程学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [112.55, 37.89]},
    "properties": {
        "image": "photo/24.LiJinxin.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "李锦鑫",
        "city": "太原",
        "organization": "太原理工大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [104.06, 30.67]},
    "properties": {
        "image": "photo/25.ZhangHaotian.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "张浩天",
        "city": "成都",
        "organization": "电子科技大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [104.06, 30.67]},
    "properties": {
        "image": "photo/27.LiJingyuan.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "李静远",
        "city": "成都",
        "organization": "电子科技大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [114.31, 30.58]},
    "properties": {
        "image": "photo/33.MiaoXiaolong.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "苗小龙",
        "city": "武汉",
        "organization": "中国地质大学（武汉）",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [104.06, 30.67]},
    "properties": {
        "image": "photo/33.XuFuhao.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "徐福昊",
        "city": "成都",
        "organization": "电子科技大学","icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [114.02, 22.54]},
    "properties": {
        "image": "photo/38.LiuXin.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "柳欣",
        "city": "深圳",
        "organization": "清华大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [114.31, 30.58]},
    "properties": {
        "image": "photo/45.ZhangYirui.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "张宜瑞",
        "city": "武汉",
        "organization": "华中农业大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [117.02, 36.68]},
    "properties": {
        "image": "photo/47.HeLiqihui.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "和李齐慧",
        "city": "山东济南，云南大理",
        "organization": "山东师范大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [104.06, 30.67]},
    "properties": {
        "image": "photo/48.DaiChengyi.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "代成毅",
        "city": "成都",
        "organization": "2030YouthForce",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [116.39, 39.92]},
    "properties": {
        "image": "photo/52.LiuCongcong.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "刘聪聪",
        "city": "北京",
        "organization": "中国农业大学人文与发展学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [116.39, 39.92]},
    "properties": {
        "image": "photo/57.MeiXinyang.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "梅鑫洋",
        "city": "北京",
        "organization": "北京大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [112.97, 28.21]},
    "properties": {
        "image": "photo/61.LaoXiaolin.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "劳晓琳",
        "city": "长沙",
        "organization": "中南林业科技大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [119.60, 39.94]},
    "properties": {
        "image": "photo/66.HuQiong.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "胡琼",
        "city": "河北秦皇岛",
        "organization": "河北环境工程学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [116.39, 39.92]},
    "properties": {
        "image": "photo/68.LiJinze.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "李金泽",
        "city": "北京",
        "organization": "中国农业大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [104.06, 30.67]},
    "properties": {
        "image": "photo/70.LiangDongmei.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "梁冬梅",
        "city": "成都",
        "organization": "电子科技大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [119.33, 26.04]},
    "properties": {
        "image": "photo/74.HuangZiyu.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "黄子钰",
        "city": "福州",
        "organization": "福州大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [116.39, 39.92]},
    "properties": {
        "image": "photo/77.ShangYihan.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "尚怡含",
        "city": "北京",
        "organization": "中国农业大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [121.59, 38.94]},
    "properties": {
        "image": "photo/78.JingLingyu.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "景凌宇",
        "city": "大连",
        "organization": "大连海事大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [121.48, 31.24]},
    "properties": {
        "image": "photo/86.WeiYiming.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "韦亦茗",
        "city": "上海",
        "organization": "上海对外经贸大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [ 10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [121.57, 29.88]},
    "properties": {
        "image": "photo/91.SiPan.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "司攀",
        "city": "宁波",
        "organization": "宁波工程学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [ 10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [55.16, 25.11]},
    "properties": {
        "image": "photo/101.ChenQian.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "陈倩",
        "city": "迪拜",
        "organization": "Galerie Hamadan",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [144.98, -37.83]},
    "properties": {
        "image": "photo/113.MaSuxiang.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "马素湘",
        "city": "墨尔本",
        "organization": "硕士： 墨尔本大学 / 本科： 浙江大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [111.66, 40.82]},
    "properties": {
        "image": "photo/114.ZhangBoyi.png",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "张博奕",
        "city": "呼和浩特",
        "organization": "内蒙古大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [126.65, 45.77]},
    "properties": {
        "image": "photo/126.HeWenzhen.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "何文珍",
        "city": "哈尔滨",
        "organization": "东北林业大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [119.60, 39.94]},
    "properties": {
        "image": "photo/127.MengLiyun.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "孟丽云",
        "city": "河北秦皇岛",
        "organization": "河北科技师范学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [114.35, 34.80]},
    "properties": {
        "image": "photo/129.MengChenyang.png",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "孟晨阳",
        "city": "开封 漯河",
        "organization": "河南大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [120.38, 36.10]},
    "properties": {
        "image": "photo/132.RenWenli.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "任文力",
        "city": "山东青岛",
        "organization": "青岛工学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [116.39, 39.92]},
    "properties": {
        "image": "photo/139.ZhangYi.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "张毅",
        "city": "北京",
        "organization": "中国矿业大学（北京）",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [116.39, 39.92]},
    "properties": {
        "image": "photo/140.XieWenting.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "谢雯婷",
        "city": "北京",
        "organization": "北京交通大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [116.39, 39.92]},
    "properties": {
        "image": "photo/147.ZhangYiran.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "张怡然",
        "city": "北京",
        "organization": "北京工商大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [103.82, 36.06]},
    "properties": {
        "image": "photo/152.ZhouJingyi.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "周静怡",
        "city": "兰州",
        "organization": "兰州大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [103.84, 30.06]},
    "properties": {
        "image": "photo/154.LiPei.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "李培",
        "city": "眉山/成都",
        "organization": "四川省眉山市农业局",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [106.20, 37.99]},
    "properties": {
        "image": "photo/156.HuangNing.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "黄宁",
        "city": "吴忠市",
        "organization": "中国矿业大学银川学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [125.31, 43.89]},
    "properties": {
        "image": "photo/160.WangYiwei.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "王艺惟",
        "city": "长春 大连",
        "organization": "吉林大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [121.48, 31.24]},
    "properties": {
        "image": "photo/164.ChenYaxi.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "陈雅西",
        "city": "上海",
        "organization": "凯盛融英信息科技（上海）有限公司",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [108.95, 34.27]},
    "properties": {
        "image": "photo/172.MuXueyuan.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "穆雪园",
        "city": "西安",
        "organization": "西安理工大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [118.77, 32.05]},
    "properties": {
        "image": "photo/180.JiaNing.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "贾宁",
        "city": "南京",
        "organization": "南京航空航天大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [120.38, 36.10]},
    "properties": {
        "image": "photo/183.LiuYing.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "刘莹",
        "city": "青岛",
        "organization": "青岛农业大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [120.38, 36.10]},
    "properties": {
        "image": "photo/186.MaoWenbin.jpeg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "毛文彬",
        "city": "青岛、烟台",
        "organization": "青岛农业大学动漫与传媒学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [120.38, 36.10]},
    "properties": {
        "image": "photo/188.LuWenyu.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "鹿文玉",
        "city": "青岛",
        "organization": "青岛农业大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [120.38, 36.10]},
    "properties": {
        "image": "photo/189.ZhanHongwei.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "战泓玮",
        "city": "青岛",
        "organization": "青岛农业大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [121.48, 31.24]},
    "properties": {
        "image": "photo/191.YuRuichuan.png",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "于瑞川",
        "city": "上海/青岛",
        "organization": "上海交通大学/早稻田大学（在读）",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [116.39, 39.92]},
    "properties": {
        "image": "photo/192.WangJiayu.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "王笳瑜",
        "city": "北京",
        "organization": "北京第二外国语学校中瑞酒店管理学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [113.21, 35.23]},
    "properties": {
        "image": "photo/197.ZhangChen.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "张晨",
        "city": "焦作",
        "organization": "焦作大学",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
},  {
    type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [111.00, 35.03]},
    "properties": {
        "image": "photo/200.MaMengyuan.jpg",
        "marker-color": "#ff8888",
        "marker-size": "large",
        "name": "马梦源",
        "city": "山西省运城市",
        "organization": "山西省运城学院",
        "icon": {
            "iconUrl": "images/1.png",
            "iconSize": [20, 20],
            "iconAnchor": [10, 10],
            "popupAnchor": [0, -10],
            "className": "dot"
        }
    }
}];

// Add custom popups to each using our custom feature properties
myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    // Create custom popup content
    var popupContent =  '<a class="popup" href="javascript:;">' +
        '<ul><li>' + feature.properties.name + '</li><li>' +
        feature.properties.city +'</li><li>' +
        feature.properties.organization + '</li></ul>' +
        '<img src="' + feature.properties.image + '" />' +
        '</a>';

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: false,
        Height: 302
    });

    marker.setIcon(L.icon(feature.properties.icon));
});

// Add features to the map
myLayer.setGeoJSON(geoJson);



