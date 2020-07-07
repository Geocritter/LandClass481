/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = 
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-123.41054055342455, 41.346599408357],
          [-123.41054055342455, 40.072492956391045],
          [-120.99904152998705, 40.072492956391045],
          [-120.99904152998705, 41.346599408357]]], null, false),
    heavyVeg = 
    /* color: #056239 */
    /* shown: false */
    ee.Geometry.MultiPolygon(
        [[[[-122.1968145595339, 40.81763557794235],
           [-122.19750120504172, 40.81685609966758],
           [-122.19739391668112, 40.816222766825305],
           [-122.19863846166403, 40.81625524557969],
           [-122.19868137700827, 40.81547575108588],
           [-122.19900324209006, 40.81529711564108],
           [-122.19908907277853, 40.81427401246371],
           [-122.19863846166403, 40.813803054904525],
           [-122.19906761510642, 40.81357569488629],
           [-122.1989388690737, 40.81297481108756],
           [-122.1984882579592, 40.812373921846785],
           [-122.19786598546774, 40.812914569651824],
           [-122.19799473150046, 40.814051373279455],
           [-122.19629957540305, 40.81387273399935],
           [-122.19694330556662, 40.81479840505747],
           [-122.19649269445212, 40.81606509189169],
           [-122.19659998281271, 40.81673090476079],
           [-122.19608499868185, 40.81715312409336]]],
         [[[-122.22635293221941, 40.81076782552387],
           [-122.22697520471087, 40.81049173277045],
           [-122.22738290048113, 40.81023187971779],
           [-122.22716832375994, 40.809777134426994],
           [-122.22680354333392, 40.8093711092124],
           [-122.22680354333392, 40.80898132266902],
           [-122.22746873116961, 40.80898132266902],
           [-122.22783351159563, 40.809566001625456],
           [-122.22832703805437, 40.809241180619],
           [-122.23006924454229, 40.808477844995025],
           [-122.22897490326422, 40.807828190738825],
           [-122.22770890060919, 40.80842912114644],
           [-122.22597082916754, 40.808737704916695],
           [-122.2254773027088, 40.809582242634036],
           [-122.22620686356085, 40.81076782552387]]],
         [[[-122.2232457048084, 40.810913991810565],
           [-122.22378214661138, 40.81047549198446],
           [-122.22519835297125, 40.80917235407911],
           [-122.22552021805303, 40.80805170823893],
           [-122.22464045349615, 40.80756446501411],
           [-122.22421130005377, 40.80827908718617],
           [-122.2234602815296, 40.80852270662224],
           [-122.22322424713629, 40.80961086251701],
           [-122.22313841644781, 40.81081268560287]]],
         [[[-122.31184208305996, 40.83689695887886],
           [-122.31237852486294, 40.83666967801967],
           [-122.31297933968227, 40.836620974877036],
           [-122.31349432381313, 40.83618264498318],
           [-122.31351578148525, 40.83561443525165],
           [-122.31358015450161, 40.835257272356216],
           [-122.31443846138637, 40.835370915304395],
           [-122.31428825768154, 40.83504622064992],
           [-122.31351578148525, 40.834851403093914],
           [-122.31321537407558, 40.83388677784152],
           [-122.31257164391201, 40.83359454618217],
           [-122.31224977883022, 40.832523019077534],
           [-122.31126326385339, 40.83398337408868],
           [-122.3116065866073, 40.83518475562702],
           [-122.31207865539392, 40.83606142571249]]],
         [[[-122.30626362624963, 40.83268455874665],
           [-122.30628508392175, 40.834015844146236],
           [-122.30637091461023, 40.83563932674809],
           [-122.30531948867639, 40.836093894752274],
           [-122.30315226379236, 40.8359315493943],
           [-122.30210083785852, 40.83679197526128],
           [-122.30244416061242, 40.83736017489995],
           [-122.3028733140548, 40.8370679585512],
           [-122.30407494369348, 40.83687314693641],
           [-122.30519074264367, 40.836889381259496],
           [-122.30604904952844, 40.837408877499506],
           [-122.3076798326095, 40.837246535361835],
           [-122.30821627441247, 40.83638611539476],
           [-122.30886000457605, 40.83638611539476],
           [-122.30890291992029, 40.835899080275006],
           [-122.30815190139612, 40.835704265225246],
           [-122.30855959716638, 40.83442171852384],
           [-122.3079158670028, 40.83367490774881]]],
         [[[-122.31120287825497, 40.82375389675127],
           [-122.30824171950253, 40.823640233891545],
           [-122.30832755019101, 40.826157008758535],
           [-122.31096684386166, 40.82617324570567]]],
         [[[-122.28661238600644, 40.827845629966646],
           [-122.28738486220273, 40.82742347869576],
           [-122.2897022907916, 40.825702372625095],
           [-122.28635489394101, 40.823591521177754],
           [-122.28249251295956, 40.825182784656135]]]]),
    water = 
    /* color: #0000ff */
    /* shown: false */
    ee.Geometry.MultiPolygon(
        [[[[-122.36880048780749, 40.58013910401842],
           [-122.3674701121361, 40.578770139132466],
           [-122.3675774004967, 40.57689591558499],
           [-122.3655603793175, 40.5768144264136],
           [-122.36568912535022, 40.578721247011266],
           [-122.36669763593981, 40.579568705387125],
           [-122.36796363859484, 40.58066060708233]]],
         [[[-122.4068481374652, 40.59280514395604],
           [-122.4060542035968, 40.59282958487381],
           [-122.40503496417114, 40.59287031971691],
           [-122.40503496417114, 40.59320434449432],
           [-122.40693396815368, 40.5931147282544],
           [-122.40774935969421, 40.59297623019285]]],
         [[[-122.39836162814208, 40.592674792243685],
           [-122.39503568896362, 40.59226744150475],
           [-122.39498204478332, 40.59299252409734],
           [-122.39826506861755, 40.593171756784606]]],
         [[[-122.38312245088838, 40.59148984347834],
           [-122.3816847868564, 40.59140837208535],
           [-122.38159895616792, 40.591832022244986],
           [-122.38299370485566, 40.59179943386645]]],
         [[[-122.55175938639665, 40.61922924156557],
           [-122.54347672495867, 40.60922796354328],
           [-122.53326287302995, 40.60769669112127],
           [-122.53287663493181, 40.62007618657634],
           [-122.53699650797869, 40.620695101139724],
           [-122.54587998423601, 40.62209578134566]]],
         [[[-122.57048307987895, 40.631808513383604],
           [-122.56786524388042, 40.62656471785327],
           [-122.56267248722759, 40.62353550548535],
           [-122.55451857182231, 40.61988723941481],
           [-122.55014120671001, 40.625196703474195],
           [-122.55593477818218, 40.628258411118246],
           [-122.56408869358745, 40.62890982016735],
           [-122.56700693699565, 40.6319387887757]]],
         [[[-121.11240209872977, 40.266885069079315],
           [-121.11720861728446, 40.25797751322102],
           [-121.12544836337821, 40.25404733631342],
           [-121.12991155917899, 40.2485447051511],
           [-121.13334478671806, 40.23806226526059],
           [-121.12647833163993, 40.22312198403104],
           [-121.13403143222587, 40.21578169142305],
           [-121.15016760165946, 40.22102483871794],
           [-121.16836370761649, 40.25168912059915],
           [-121.16973699863212, 40.283910955434436],
           [-121.18243994052665, 40.301718063414015],
           [-121.19926275546806, 40.298575973557256],
           [-121.22295202548759, 40.27002863229493],
           [-121.19857610996024, 40.253261273539394],
           [-121.17385687167899, 40.23177202223261],
           [-121.15703405673759, 40.21578169142305],
           [-121.13197149570243, 40.2089649933878],
           [-121.11892523105399, 40.21368431890234],
           [-121.1027890616204, 40.203458698280684],
           [-121.09077276523368, 40.18615028758503],
           [-121.07909979160087, 40.206343003882274],
           [-121.08527960117118, 40.2430416265948],
           [-121.09695257480399, 40.2634793773888]]]]),
    urban = 
    /* color: #009999 */
    /* shown: false */
    ee.Geometry({
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "coordinates": [
            -122.35566716558938,
            40.58938524775748
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35536675817971,
            40.58938524775748
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35573153860574,
            40.58915712042732
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35536675817971,
            40.58907564619223
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35575299627786,
            40.58888010762302
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35530238516336,
            40.58881492797287
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35571008093362,
            40.58866827352782
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35538821585183,
            40.588603093671246
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35545258886819,
            40.5884075537203
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35575299627786,
            40.588374963672905
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3556886232615,
            40.58813053781109
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35571008093362,
            40.58783722559768
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35609631903176,
            40.58791870134158
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35663276083474,
            40.587951291611304
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35684733755593,
            40.58793499647844
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35684733755593,
            40.58764168340742
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35676150686746,
            40.58746243589739
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35648255712991,
            40.587674273812155
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35609631903176,
            40.587674273812155
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3553453005076,
            40.587723159389505
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35540967352395,
            40.58801647210318
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3482857263804,
            40.587625388199086
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34789948828225,
            40.58760909298678
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34794240362649,
            40.58738095959766
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34832864172463,
            40.58738095959766
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36036639578347,
            40.5853114283041
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36034493811135,
            40.58508328707734
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36030202276712,
            40.584822553293876
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36034493811135,
            40.58428478665538
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36068826086526,
            40.58441515472236
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3607311762095,
            40.58405664192672
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36043076879983,
            40.58392627316097
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36077409155374,
            40.583763311846425
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36040931112771,
            40.58361664632387
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36043076879983,
            40.58329072178903
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36030202276712,
            40.585881777966364
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36043076879983,
            40.58624028097891
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.36038785345559,
            40.58663137298274
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35545258886819,
            40.58501810372675
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35583882696633,
            40.58501810372675
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35787730581765,
            40.585099582905066
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35738377935891,
            40.58503439957037
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35787730581765,
            40.58488773683501
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35789876348977,
            40.58456181849398
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35083918936257,
            40.58444774669938
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35004525549417,
            40.584480338660555
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34940152533059,
            40.58444774669938
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34886508352761,
            40.58431737869594
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34813552267556,
            40.58413812227629
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34757762320046,
            40.583991457575614
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34710555441384,
            40.58373071953588
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3463759935618,
            40.58351886913017
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35362868673806,
            40.58475736968918
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35403638250833,
            40.584724777863016
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3551307237864,
            40.58332331431397
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35506635077004,
            40.58302998101765
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35465865499978,
            40.58298109200986
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35605340368753,
            40.583893680929805
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35616069204812,
            40.583649238690015
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3563538110972,
            40.58363294250891
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35682587988381,
            40.58361664632387
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3568044222117,
            40.58337220307162
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.35731940634255,
            40.58327442552057
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34804969198709,
            40.586549895670544
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34802823431497,
            40.58637064523431
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34802823431497,
            40.58615880319025
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34802823431497,
            40.58602843852194
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34397273428445,
            40.58819571812826
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34365086920266,
            40.58819571812826
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34360795385842,
            40.588000176986164
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3440371073008,
            40.587983881865206
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3440371073008,
            40.58783722559768
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34367232687478,
            40.587804635272356
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34365086920266,
            40.58764168340742
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3440371073008,
            40.58764168340742
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3432431734324,
            40.584545522535215
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34296422369485,
            40.58457811444873
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34317880041604,
            40.584301082677634
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34337191946511,
            40.58399630281412
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34352212316995,
            40.58432222391085
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34350066549783,
            40.5834422333049
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34332900412087,
            40.583751860949356
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34292130835061,
            40.58402889499528
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34298568136697,
            40.583382341230426
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34283547766213,
            40.58374085764031
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34410148031716,
            40.584278628652065
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3443589723826,
            40.58419714847369
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34433751471047,
            40.58393641123578
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34427314169412,
            40.583724561481574
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34388690359597,
            40.583724561481574
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.34401564962869,
            40.583447526175156
          ]
        },
        {
          "type": "Point",
          "coordinates": [
            -122.3443589723826,
            40.58364308062818
          ]
        },
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.35707006156461,
                40.582036654639914
              ],
              [
                -122.3563834160568,
                40.58314481235507
              ],
              [
                -122.35702714622037,
                40.58311221974316
              ]
            ]
          ],
          "geodesic": true,
          "evenOdd": true
        },
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.35619029700773,
                40.58071661928494
              ],
              [
                -122.35556802451627,
                40.58073291617652
              ],
              [
                -122.35554656684415,
                40.58154775569389
              ],
              [
                -122.3562761276962,
                40.58154775569389
              ]
            ]
          ],
          "geodesic": true,
          "evenOdd": true
        },
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.35601863563078,
                40.58239517826266
              ],
              [
                -122.35533199012296,
                40.58231369578988
              ],
              [
                -122.35528907477872,
                40.58342184891527
              ],
              [
                -122.35584697425382,
                40.58342184891527
              ]
            ]
          ],
          "geodesic": true,
          "evenOdd": true
        },
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.38743689219714,
                40.56165943079088
              ],
              [
                -122.3863854662633,
                40.56165943079088
              ],
              [
                -122.3863854662633,
                40.565278273835865
              ],
              [
                -122.38735106150867,
                40.56524567251966
              ]
            ]
          ],
          "geodesic": true,
          "evenOdd": true
        },
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.38722231547595,
                40.56593029682517
              ],
              [
                -122.38629963557483,
                40.56591399632786
              ],
              [
                -122.38619234721423,
                40.568440526030095
              ],
              [
                -122.38722231547595,
                40.568440526030095
              ]
            ]
          ],
          "geodesic": true,
          "evenOdd": true
        },
        {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -122.39016201655627,
                40.56568578894856
              ],
              [
                -122.38979723613025,
                40.565636887266024
              ],
              [
                -122.38964703242542,
                40.568880621449665
              ],
              [
                -122.39031222026111,
                40.568929520762076
              ]
            ]
          ],
          "geodesic": true,
          "evenOdd": true
        }
      ],
      "coordinates": []
    }),
    lightVeg = 
    /* color: #ff00ff */
    /* shown: false */
    ee.Geometry.MultiPoint(
        [[-122.3924848260155, 40.5519614295511],
         [-122.39222733395007, 40.55197773344609],
         [-122.39227024929431, 40.551733174604465],
         [-122.39252774135974, 40.55170056669144],
         [-122.39252774135974, 40.55145600683753],
         [-122.3922487916222, 40.5514723108556],
         [-122.39194838421253, 40.55171687064994],
         [-122.39186255352405, 40.55214077217762],
         [-122.39190546886829, 40.551602742857064],
         [-122.38087622539905, 40.552124468322326],
         [-122.3809405984154, 40.55191251784232],
         [-122.3816057862511, 40.5531842106592],
         [-122.3816057862511, 40.55302117446827],
         [-122.38124100582507, 40.5531842106592],
         [-122.38130537884143, 40.552988567182446],
         [-122.38302199261096, 40.55026580279804],
         [-122.38332240002063, 40.55029841140971],
         [-122.38357989208606, 40.55029841140971],
         [-122.38278595821765, 40.55002123770418],
         [-122.39078966991809, 40.55029841140971],
         [-122.39038197414783, 40.5497440628514],
         [-122.39010302441028, 40.54972775841259],
         [-122.39008156673816, 40.55060819242889],
         [-122.39010302441028, 40.55034732429749],
         [-122.39038197414783, 40.55028210710586],
         [-122.3922487916222, 40.550086455149874],
         [-122.39227024929431, 40.54982558498603],
         [-122.36851660625842, 40.54827664745824],
         [-122.37452475445178, 40.553917868605836],
         [-122.3745462121239, 40.55372222727272],
         [-122.37486807720569, 40.553477674802494],
         [-122.37491099254993, 40.5532657286058],
         [-122.37506119625476, 40.55315160345279],
         [-122.37508265392688, 40.55295595988074],
         [-122.3752113999596, 40.55266249345091],
         [-122.36986843960193, 40.55099949272054]]),
    bare = 
    /* color: #ff9999 */
    /* shown: false */
    ee.Geometry.MultiPolygon(
        [[[[-122.40278450863269, 40.55060819242889],
           [-122.40417925732044, 40.54987449821914],
           [-122.40362135784534, 40.54932014615166],
           [-122.40297762768176, 40.54887992212322],
           [-122.40261284725574, 40.549564713805935],
           [-122.40207640545276, 40.549988628957514],
           [-122.40081040279773, 40.550102759501364],
           [-122.40089623348621, 40.55093427616406],
           [-122.40143267528919, 40.55108101332683],
           [-122.40231243984607, 40.551113621541575]]],
         [[[-122.39196984188465, 40.54770597723294],
           [-122.39128319637683, 40.547722282163974],
           [-122.39072529690173, 40.5479016361437],
           [-122.39016739742664, 40.54830925703851],
           [-122.390231770443, 40.54892883604705],
           [-122.39171234981922, 40.548863617473984]]],
         [[[-122.40664544506242, 40.56864937866971],
           [-122.40474644107988, 40.56861677899559],
           [-122.40468206806352, 40.56996150236924],
           [-122.40665617389848, 40.56996150236924]]],
         [[[-122.41162362499406, 40.56939101696539],
           [-122.41100135250261, 40.56896722465999],
           [-122.41033616466692, 40.56871457797027],
           [-122.40825477047136, 40.568673828414845],
           [-122.40823331279924, 40.56885312627305],
           [-122.41007867260149, 40.56905687325607],
           [-122.410711673929, 40.56917912114815],
           [-122.41103353901079, 40.569448065724636],
           [-122.41115155620744, 40.569904454047716],
           [-122.41197767658403, 40.56992075357311]]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var a = require('users/tonywangs/GEOG481:UrbanClass/ImportImage.js');
var remove = require('users/tonywangs/GEOG481:UrbanClass/RemoveLayer.js')
var label = 'landcover'
var year = 2010
var start = "-05-01"
var end = "-08-31"
var sDate = year.toString()+start
var eDate = year.toString()+end
var newfc = ee.FeatureCollection([
    ee.Feature(heavyVeg, {'class': 0}),
    ee.Feature(lightVeg, {'class': 1}),
    ee.Feature(water, {'class': 2}),
    ee.Feature(bare, {'class': 3}),
    ee.Feature(urban, {'class': 4})
]);

var result = a.importImage('2010-05-01', '2010-08-31', roi)

/*------------------------------------------------------------------------------
                             Start Training 
-------------------------------------------------------------------------------*/
// Select the bands for training
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];


// Sample the input imagery to get a FeatureCollection of training data.
var training = result.select(bands).sampleRegions({
    collection: newfc,
    properties: ['class'],
    scale: 30
});

// Train a CART classifier with default parameters.
var trained = ee.Classifier.smileCart().train(training, 'class', bands);

/* Make a Random Forest classifier and train it.
var classifier = ee.Classifier.randomForest().train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});*/

//Initiate loop start for next x amount of images
while(year<=2012){
    /*------------------------------------------------------------------------------
                Start of image loading >> classified image loading
    -------------------------------------------------------------------------------*/
    var result = a.importImage(sDate, eDate, roi)
    Map.addLayer(result, {bands: ['B4', 'B3', 'B2'], gamma: 2.2});
    
    
    // Classify the image with the same bands used for training.
    var classified = result.select(bands).classify(trained);
    
    // Define a palette for the Land Use classification.
    var palette = [
      '01380A', // heavy veg
      '07DB29', // light veg
      '0000FF', // water 
      '735005', // bare
      'a3a3a3', // urban 
    ];
    
    // Display the classification result and the input image.
    Map.addLayer(classified, {min: 0, max: 4, palette: palette}, 'Land Use Classification');
    
    // Export the image, specifying scale and region.
    Export.image.toDrive({
      image: classified,
      description: year,
      scale: 30,
      region: roi
    });
    tools.removeLayer()
    year = year + 2
    var sDate = year.toString()+start
    var eDate = year.toString()+end
}
