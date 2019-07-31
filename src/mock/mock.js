// 使用mock模拟首页数据
const Mock = require('mockjs')

let homeData = {
    status: 0,
    data: {
        headList: [
            {
                imgUrl: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/51704/36/252/78649/5cd3d3d8E92e1d354/e23addf8cec5be8c.jpg!cr_1125x549_0_72!q70.jpg.dpg',
                categoryId: 100008
            },
            {
                imgUrl: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/40943/4/4322/105943/5cd2b1e3Edf80492a/afc09f35f6cacabc.jpg!cr_1125x549_0_72!q70.jpg.dpg',
                categoryId: 100016
            },
            {
                imgUrl: '//imgcps.jd.com/ling4/885987/57Ku5rK56LCD5ZGz55yB5b-D6LSt/5ZOB6LSo5LyY6LaK/p-5c130ba282acdd181d94965b/597921d7/cr_1125x549_0_72/s1125x690/q70.jpg',
                categoryId: 100035
            },
            {
                imgUrl: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/36758/1/9742/63538/5cd12dd3E15e747b9/4da8fae15a208b3b.jpg!cr_1125x549_0_72!q70.jpg.dpg',
                categoryId: 100035
            }

        ],
        categoryList: [
            {
                name: 'Mall超市',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t25534/207/1767774998/8085/523157d6/5bbc800fN502129b8.png',
                categoryId: 100002
            }, {
                name: '全球购',
                imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png.webp',
                categoryId: 100002
            }, {
                name: 'Mall服饰',
                imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
                categoryId: 100002
            }, {
                name: 'Mall生鲜',
                imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp',
                categoryId: 100002
            }, {
                name: 'Mall到家',
                imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
                categoryId: 100002
            }, {
                name: '充值缴费',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png',
                categoryId: 100002
            }, {
                name: '9.9元拼',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png',
                categoryId: 100002
            }, {
                name: '领劵',
                imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
                categoryId: 100002
            }, {
                name: '赚钱',
                imgUrl: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
                categoryId: 100002
            }, {
                name: '全部',
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png',
                categoryId: 100002
            }

        ],
        floorList: [
            {
                headUrl: '//m.360buyimg.com/mobilecms/jfs/t15526/56/2344102455/23273/d8e15d5a/5aa0dbc1Nefd2bd2a.png!q70.jpg.dpg',
                list: [
                    {
                        title: '经典手表',
                        desc: '为热爱倾注时间',
                        products: [
                            {
                                imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t2671/114/1635973838/361069/1c4ea20e/574400daNc1eb14bd.jpg!q70.jpg.dpg',
                                categoryId: 100001
                            },
                            {
                                imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/20292/37/9347/134055/5c7dd087E6fad6e10/4025ee61deb95ecd.jpg!q70.jpg.dpg',
                                categoryId: 100001
                            }
                        ]
                    },
                    {
                        title: 'MMall家电',
                        desc: '家电狂欢 京彩有你',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t22363/318/1484948466/11138/8317fc9b/5b2a528eN7c6bde83.jpg!q70.jpg.dpg',
                                categoryId: 100001
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t22666/293/257815171/29274/6b5605b1/5b2a5295N5a81ad96.jpg!q70.jpg.dpg',
                                categoryId: 100001
                            }
                        ]
                    },
                    {
                        title: 'MMall超市',
                        desc: '超市大放价 抢超值好货',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t16852/170/2693122660/56143/28da8c2a/5b063c63N5746e4e4.jpg!q70.jpg.dpg',
                                categoryId: 100004
                            },
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t18877/293/2631103430/85245/f220b40d/5b063c6fN7820b399.jpg!q70.jpg.dpg',
                                categoryId: 100004
                            }
                        ]
                    },
                    {
                        title: '爱家',
                        desc: '家纺热卖 部分低至9.9元',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t15244/283/356547262/47743/b6607b0f/5a2a6d51N8830e8b8.jpg!q70.jpg.dpg',
                                categoryId: 100005
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t16057/38/102057973/36179/b957e4ec/5a2a6d55N83655f7f.jpg!q70.jpg.dpg',
                                categoryId: 100005
                            }
                        ]
                    },
                    {
                        title: '家有萌宝',
                        desc: '低至五折',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t17929/299/899794385/17291/d90318f9/5ab4c680N7d291625.jpg!q70.jpg.dpg',
                                categoryId: 100006
                            },
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t18802/262/2452746578/333259/5dcdfb06/5af3ffb4N0c700b57.jpg!q70.jpg.dpg',
                                categoryId: 100006
                            }
                        ]
                    },
                    {
                        title: '爱吃',
                        desc: '9.9包邮，夏日也生动',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t14473/103/2042876100/41836/766c1953/5a697f47Nc952ed7f.jpg!q70.jpg.dpg',
                                categoryId: 100007
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t17155/227/2678303408/52223/f7a950c/5b0535d6Ne4073be7.jpg!q70.jpg.dpg',
                                categoryId: 100007
                            }
                        ]
                    }
                ]
            },
            {
                headUrl: '//m.360buyimg.com/mobilecms/jfs/t19381/275/717008577/26686/e58b7ef4/5aa23f27Nfa6d6be3.png!q70.jpg.dpg',
                list: [
                    {
                        title: '智能家电馆',
                        desc: '满减狂欢',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t25183/247/391394027/33684/8e1af9dc/5b6d048aNd7dae520.jpg!q70.jpg.dpg',
                                categoryId: 100008
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t1/839/25/11121/19615/5bccb3a0E4b504f77/e55c2fb826efe911.jpg!q70.jpg.dpg',
                                categoryId: 100008
                            }
                        ]
                    },
                    {
                        title: '珠宝馆',
                        desc: '满减优惠',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t19009/357/347377157/13661/d0d9e5fb/5a6e8bb3Nd6182f9f.jpg!q70.jpg.dpg',
                                categoryId: 100009
                            },
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t27889/231/477152414/149859/7a5fb585/5baf1f58N45c2ca6c.jpg!q70.jpg.dpg',
                                categoryId: 100009
                            }
                        ]
                    },
                    {
                        title: '鞋靴箱包',
                        desc: '低至五折',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t21469/359/769885083/29352/68865ed/5b178e49Nc5db7341.jpg!q70.jpg.dpg',
                                categoryId: 100010
                            },
                            {
                                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t1/7091/11/2919/441267/5bd578bfE03e7166a/c5d5222c1802fd21.jpg!q70.jpg.dpg',
                                categoryId: 100010
                            }
                        ]
                    },
                    {
                        title: '童装馆',
                        desc: '春夏小萌娃',
                        products: [
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t20614/194/808562651/89118/894d41a5/5b18ba8dN855ebe44.png!q70.jpg.dpg',
                                categoryId: 100011
                            },
                            {
                                imgUrl: '//m.360buyimg.com/n1/jfs/t12460/183/2350810548/47292/f4c5485/5a914202Nfc1b8a12.png!q70.jpg.dpg',
                                categoryId: 100011
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
let categoryData = {
    status: 0,
    data: [
        {
            name: '手机数码',
            mainImgUrl: '//img20.360buyimg.com/mcoss/jfs/t16273/143/46476745/45673/cba0840c/5a28ef10N82ab81d3.jpg',
            list: [
                {
                    title: '手机通讯',
                    productList: [
                        {
                            title: '手机',
                            imgUrl: 'https://img12.360buyimg.com/n7/jfs/t30031/152/1332312785/300863/cdf3a03d/5cdd233eN69626d85.jpg'
                        },
                        {
                            title: '全面屏手机',
                            imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/42583/20/7497/163984/5d11ec8bEf59466f6/e1ee156f444b6aef.jpg'
                        },
                        {
                            title: '游戏手机',
                            imgUrl: 'https://img13.360buyimg.com/n7/jfs/t1/76256/19/2177/295569/5d0832c7Ea425c7bd/481d8ee23d9b1d54.jpg'
                        },
                        {
                            title: '拍照手机',
                            imgUrl: 'https://img12.360buyimg.com/n7/jfs/t1/77035/16/4671/178366/5d2d4abbE93a37bd6/b52328c8d0750623.jpg'
                        },
                        {
                            title: '老年机',
                            imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/39578/14/12218/359732/5d3578cbEdf6fdb06/164407d41a000a04.jpg'
                        },
                        {
                            title: '女性手机',
                            imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/22478/2/2207/433959/5c1a28dcE9fb458db/61768e6d86aa7579.jpg'
                        }
                    ]
                },
                {
                    title: '手机配件',
                    productList: [
                        {
                            title: '数据线',
                            imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/44776/17/2893/140455/5d0bb256E691a9cf9/5f3f12d63105cfa4.jpg'
                        },
                        {
                            title: '手机壳',
                            imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/11028/8/7868/186915/5c658607E622438c7/ee734871e3d65416.jpg'
                        },
                        {
                            title: '充电宝',
                            imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/52508/34/1641/148940/5cf52f40E94c1f4a0/4e82851ca6e01d60.jpg'
                        },
                        {
                            title: '手机贴膜',
                            imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/33848/39/1441/248896/5ca5f3a9E08a4d7aa/65d268b3b517bdde.jpg'
                        },
                        {
                            title: '耳机',
                            imgUrl: 'https://img12.360buyimg.com/n7/jfs/t1/67326/18/1201/66483/5cf71e87E8db47be7/4db71444dbc65619.jpg'
                        },
                        {
                            title: '充电器',
                            imgUrl: 'https://img12.360buyimg.com/n7/jfs/t27808/299/528752797/209581/8c55490e/5bb091c9Nd9da05fa.jpg'
                        }
                    ]
                },
                {
                    title: '摄影摄像',
                    productList: [
                        {
                            title: '单反相机',
                            imgUrl: 'https://img10.360buyimg.com/n7/jfs/t4189/46/2611634685/302786/cad907b5/58d49057Nd71df4ec.jpg'
                        },
                        {
                            title: '数码相机',
                            imgUrl: 'https://img12.360buyimg.com/n7/jfs/t1/19207/9/3735/138591/5c4838d8E2a7e7052/845bddb79414fa28.jpg'
                        },
                        {
                            title: '镜头',
                            imgUrl: 'https://img13.360buyimg.com/n7/jfs/t1/44524/7/2185/204209/5cf653e8Eb551f5a3/dbf3ef1c58b66c17.jpg'
                        },
                        {
                            title: '户外器材',
                            imgUrl: 'https://img13.360buyimg.com/n7/jfs/t14704/338/2456915719/116066/e74f6347/5a9e24a8Naaf28a3e.jpg'
                        }
                    ]
                },


            ]
        },
        {
            name: '电脑办公',
            mainImgUrl: '//img30.360buyimg.com/mcoss/jfs/t14743/292/279117506/48503/9b7d9f2c/5a28ea97N36cb4d16.jpg',
            list: [
                {
                    title: '热门分类',
                    productList: [
                        {
                            title: '轻薄本',
                            imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/28529/28/14095/308403/5ca5c566E256eed12/42aa00e5b7798ad9.jpg'
                        },
                        {
                            title: '游戏本',
                            imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/41335/24/4703/247425/5cd54739E813d1d35/c733e6df8e934b55.jpg'
                        },
                        {
                            title: '机械键盘',
                            imgUrl: 'https://img13.360buyimg.com/n7/jfs/t1/8927/26/9656/128341/5c19b131E2cc53586/357c19d547d2d22f.jpg'
                        },
                        {
                            title: '组装电脑',
                            imgUrl: 'https://img12.360buyimg.com/n7/jfs/t1/9490/4/8218/188108/5c0a4c73E0f77af96/3d579ab460eaf0d5.jpg'
                        },
                        {
                            title: '移动硬盘',
                            imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/23766/21/5447/136671/5c3ec54eE51f105b2/30a896f19cf46dd2.jpg'
                        },
                        {
                            title: '曲屏显示器',
                            imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/76318/27/4353/355572/5d284effEa4e0f452/66c3ab4a976f6258.jpg'
                        }
                    ]
                },
                {
                    title: '外设产品',
                    productList: [
                        {
                            title: '鼠标',
                            imgUrl: 'https://img10.360buyimg.com/n7/jfs/t25498/266/296141314/154580/f4422dab/5b6acf31N9a0a1b6f.jpg'
                        },
                        {
                            title: 'U盘',
                            imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/80657/8/1677/92231/5d0099d0E0a8eecbc/b5515fa4621a9664.jpg'
                        },
                        {
                            title: '插座',
                            imgUrl: 'https://img13.360buyimg.com/n7/jfs/t1/29063/13/2812/226686/5c209d33Ea712c97f/e4ded7710c8ebbe3.jpg'
                        },
                        {
                            title: '电脑工具',
                            imgUrl: 'https://img13.360buyimg.com/n7/jfs/t19795/176/770230415/357368/75bf9ad1/5b0bae1cN5b5a6e4c.jpg'
                        },
                        {
                            title: '摄像头',
                            imgUrl: 'https://img13.360buyimg.com/n7/jfs/t1/59388/22/550/117771/5cebb3daE229cd128/601f8c869e9633b3.jpg'
                        },
                        {
                            title: '手写板',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11734/189/2377033150/4145/b78bfcf/5a16a594Ncb41c95a.jpg'
                        }
                    ]
                }
            ],
        },
        {
            name: '家用电器',
            mainImgUrl: 'https://img12.360buyimg.com/cms/jfs/t1/65780/29/3219/750162/5d16d317E3240eaab/b338941d2216d08d.jpg',
            list: [
                {
                    title: '家用电器',
                    productList: [
                        {
                            title: '电饭煲',
                            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg'
                        },
                        {
                            title: '豆浆机',
                            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg'
                        },
                        {
                            title: '冰箱',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t13153/44/964603695/1011/21d660d2/5a17f6aeN280056ea.jpg'
                        },
                        {
                            title: '双开门冰箱',
                            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t13588/266/943842715/1088/c4ae40e4/5a17f6c5Ne56d7e26.jpg'
                        },
                        {
                            title: '冷柜',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12928/273/1007467483/3549/52dad666/5a17f69eN1d10e257.jpg'
                        },
                        {
                            title: '洗衣机',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t12481/129/1018625238/1840/43d49869/5a17f6eaN9ec936de.jpg'
                        },
                        {
                            title: '电热水器',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t11053/246/2459202669/4318/fd6bd8d1/5a17f356Nd692ab74.jpg'
                        },
                        {
                            title: '电视',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t11842/356/2416901099/2164/ab77fbaa/5a17f71eN25360979.jpg'
                        },
                        {
                            title: '4K超清电视',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11386/179/2470866031/2353/dfc7d933/5a17f72cN97075084.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '美妆护肤',
            mainImgUrl: 'https://img13.360buyimg.com/cms/jfs/t1/19459/37/12282/516812/5c95efaeEe97bc216/cb0d6fa11a580cf3.jpg',
            list: [
                {
                    title: '美妆护肤',
                    productList: [
                        {
                            title: '美白',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t19531/110/2538137867/14848/c3ec84ac/5afd3cc5N8aa4b7c8.jpg'
                        },
                        {
                            title: '防晒',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t17560/320/2504739891/10347/f04150c4/5afd3cbeN77d00886.jpg'
                        },
                        {
                            title: '控油',
                            imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '男装男鞋',
            mainImgUrl: 'https://img10.360buyimg.com/cms/jfs/t1/12261/34/11816/513452/5c9350dfEf165db8b/8178eae66f53bac9.jpg',
            list: [
                {
                    title: '男装男鞋',
                    productList: [
                        {
                            title: '夹克',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12514/85/571462957/6214/29cdf637/5a0e9496Necd5bd0e.jpg'
                        },
                        {
                            title: '风衣',
                            imgUrl: '//img11.360buyimg.com/focus/s140x140_jfs/t11590/82/2013872051/5874/83b5772d/5a0e947eN67f0e537.jpg'
                        },
                        {
                            title: '西服',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t13489/68/552491077/2495/7b517e4b/5a0e9483Na6231535.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '女装女鞋',
            mainImgUrl: 'https://img14.360buyimg.com/cms/jfs/t1/37312/40/5672/166119/5cc0080eEb4b3a385/8236638adb4cd18b.jpg',
            list: [
                {
                    title: '家用电器',
                    productList: [
                        {
                            title: '风衣',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg'
                        },
                        {
                            title: '长袖T恤',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t16750/238/698160610/5156/5b1f25b/5a9fbfccN574cba12.jpg'
                        },
                        {
                            title: '卫衣',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t11953/286/2195921828/5728/75b86d5b/5a127fbaN2780918c.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '母婴童装',
            mainImgUrl: 'https://img10.360buyimg.com/imgzone/jfs/t1/80972/8/1077/624815/5cf4ef89Efcf12dec/2aff29afd6e772b4.jpg',
            list: [
                {
                    title: '母婴童装',
                    productList: [
                        {
                            title: '套装',
                            imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t18790/111/673564180/2396/3d27d79a/5a9f94c1N5b0c8724.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '图书音像',
            mainImgUrl: 'https://img13.360buyimg.com/da/jfs/t1/57644/6/5613/100862/5d35189bEf11a0dfb/f2b9d43e9d74a6a5.jpg!q80.webp',
            list: [
                {
                    title: '图书音像',
                    productList: [
                        {
                            title: '文学',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t19882/234/705045012/17917/e840651a/5b07dfddN7d635871.jpg'
                        },
                        {
                            title: '童书',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t18520/109/1790543750/23751/a98be11f/5ad82a1cN400c11d1.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '户外运动',
            mainImgUrl: 'https://img12.360buyimg.com/cms/jfs/t1/12232/11/2004/792545/5c170affE3d9df2be/bbbeef7559fa3f2a.jpg',
            list: [
                {
                    title: '户外运动',
                    productList: [
                        {
                            title: '跑步鞋',
                            imgUrl: '//img30.360buyimg.com/focus/s140x140_jfs/t13993/246/156269250/8757/12386c/5a1fb5e7N12a676b6.jpg'
                        },
                        {
                            title: '体育用品',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12313/239/1414060687/10293/ca8ad748/5a1fb5e1Nd80abbc2.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '食品生鲜',
            mainImgUrl: 'https://img12.360buyimg.com/cms/jfs/t1/33405/21/14045/303654/5d0b43bcE451832fb/e42687b8ffb52aa5.jpg',
            list: [
                {
                    title: '家用电器',
                    productList: [
                        {
                            title: '休闲零食',
                            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t19789/191/2614150696/17735/d2db9aca/5b02411eNb44a03f7.jpg'
                        },
                        {
                            title: '牛奶',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t17479/1/2588472716/22795/d676e57a/5b024117N06151eba.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '酒水饮料',
            mainImgUrl: 'https://img10.360buyimg.com/cms/jfs/t1/67063/8/3290/453338/5d196a17Ebce2d78b/a25a37903bf87a64.jpg',
            list: [
                {
                    title: '酒水饮料',
                    productList: [
                        {
                            title: '酒品馆',
                            imgUrl: '//img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '家居家装',
            mainImgUrl: 'https://img13.360buyimg.com/cms/jfs/t1/43560/2/9601/141965/5d328b05Ec746cd8c/9732d2bf6c5cc007.jpg',
            list: [
                {
                    title: '家居家装',
                    productList: [
                        {
                            title: '实木餐桌',
                            imgUrl: '//img13.360buyimg.com/focus/s140x140_jfs/t12772/3/1793374412/9705/e633967a/5a28e6c9N8aaaea3f.jpg'
                        },
                        {
                            title: '椅子',
                            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t13888/280/1737354934/3036/f94ecdf8/5a28e0d6N80f30096.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '箱包手袋',
            mainImgUrl: 'https://img10.360buyimg.com/cms/jfs/t1/42527/30/9517/618141/5d2d95b1E555b7005/b5d598bf6a4054e3.jpg',
            list: [
                {
                    title: '箱包手袋',
                    productList: [
                        {
                            title: '箱子',
                            imgUrl: '//img20.360buyimg.com/focus/s140x140_jfs/t12364/153/835832532/6803/5b58b137/5a152fb3Nb9f571ea.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '钟表珠宝',
            mainImgUrl: 'https://img14.360buyimg.com/cms/jfs/t1/36432/9/15296/417748/5d31a619E4648de40/af5db7c5c778319d.jpg',
            list: [
                {
                    title: '钟表珠宝',
                    productList: [
                        {
                            title: '瑞士手表',
                            imgUrl: '//img10.360buyimg.com/focus/s140x140_jfs/t14155/271/890296038/3841/f1adee7f/5a166fe1Nc6bd2f12.jpg'
                        }
                    ]
                }
            ]
        },
        {
            name: '玩具乐器',
            mainImgUrl: 'https://img12.360buyimg.com/cms/jfs/t1/39251/16/11151/390315/5d281804Ef12a9823/e88bab5f332a2a62.jpg',
            list: [
                {
                    title: '家用电器',
                    productList: [
                        {
                            title: '遥控车',
                            imgUrl: '//img12.360buyimg.com/focus/s140x140_jfs/t17575/123/2617650159/16720/74c14629/5b02a0c6N3f2770d9.jpg'
                        }
                    ]
                }
            ]
        },
    ]
}
let hotData = {
    status: 0,
    data: [
        {
            title: '小米手机',
            hot: 1
        },{
            title: '笔记本',
            hot: 1
        },{
            title: '电脑',
            hot: 0
        },{
            title: '平板',
            hot: 0
        },{
            title: '液晶电视',
            hot: 1
        },{
            title: '家电',
            hot: 0
        },{
            title: '玩具',
            hot: 0
        }
    ]
}

Mock.mock('/home/data', 'post', homeData)
Mock.mock('/category/data', 'post', categoryData)
Mock.mock('/search/hot', 'post', hotData)
