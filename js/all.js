var app = new Vue({
    el: "#app",
    data: {
        products: [
            {
                title: '運動派對',
                title2: '可讓1-4名玩家在遊戲主機上參與六種精彩有趣的戶外活動挑戰自我：籃球、高爾夫、沙灘排球、飛盤、水上摩托車和滑板。無論玩家選擇何種運動，都可以盡情享受美麗的海島樂園風光。',
                carttitle: '運動派對',
                img: 'img/shop/1.jpg',
                imgtwo: 'img/shop/1-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: 'just dance 2022',
                title2: '《Just Dance 舞力全開 2022》為玩家帶來了更多跳舞方式，除了41首全新歌曲，還將享受到回歸的經典遊戲模式：揮汗模式、合作模式、快速遊玩模式、世界舞池。',
                carttitle: 'just dance 2022',
                img: 'img/shop/2.jpg',
                imgtwo: 'img/shop/2-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: 'Fit Boxing',
                title2: '可以選擇不同的健身目標，將你的運動個人化，用你自己的方式鍛鍊，每日鍛鍊時間從10分鐘到40分鐘不等，並提供「一般」和「快速」兩種模式。本遊戲軟體會估算你的BMI及每日燃燒的卡路里，讓你可以記錄自己的進度。',
                carttitle: 'Fit Boxing',
                img: 'img/shop/3.jpg',
                imgtwo: 'img/shop/3-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: '健身環大冒險',
                title2: '遊戲內以回合制角色扮演的冒險模式為主，玩家需要使用Ring-Con和腿部固定帶配合遊戲中的動作要求擊敗怪獸和闖關。此外遊戲也包含了健身小遊戲和健身鍛鍊的其他模式。',
                carttitle: '健身環大冒險',
                img: 'img/shop/4.jpg',
                imgtwo: 'img/shop/4-1.jpg',
                price: 150,
                amount: 0,
                amountShow: 1
            },
            {
                title: '家庭訓練機',
                title2: '全身都能充分訓練到的體感運動遊戲《家庭訓練機》將於 Nintendo Switch 平台登場！ 操作容易，只需要將 Joy-Con 放入腿部固定帶並綁在腿上，即可利用跑步、跳躍等動作挑戰 15 種豐富多樣的關卡',
                carttitle: '家庭訓練機',
                img: 'img/shop/5.jpg',
                imgtwo: 'img/shop/5-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: 'ARMS',
                title2: '玩家將在一個固定場景中進行拳擊對戰，一局遊戲可以最多有4名角色一起對戰。遊戲除了主要的單打和雙打拳擊對戰模式以外，還有單挑灌籃、排球賽、打靶、百人斬等小遊戲內容，可選擇跟電腦、線上玩家、線上或本地朋友進行對戰。通過不同遊戲模式，玩家可以獲得遊戲內的金錢獎勵來購買更多拳套。',
                carttitle: 'ARMS',
                img: 'img/shop/6.jpg',
                imgtwo: 'img/shop/6-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: '馬力歐派對',
                title2: '使用瑪利歐系列角色的聚會電子遊戲系列，在遊戲中由玩家或電腦控制的四名角色在各種小遊戲中競賽。系列以聚會遊戲元素，以及至多4玩家同時遊戲的多人模式。',
                carttitle: '馬力歐派對',
                img: 'img/shop/7.jpg',
                imgtwo: 'img/shop/7-1.jpg',
                price: 150,
                amount: 0,
                amountShow: 1
            },
            {
                title: '超級馬力歐',
                title2: '玩家通常控制瑪利歐，在虛構的蘑菇王國中冒險。同行的一般還有其弟路易吉，偶爾或是其它瑪利歐角色。玩家操控角色在每關的平台上奔跑、跳躍，並從上方踩敵人頭部。遊戲劇情不複雜，典型的是瑪利歐營救被反派庫巴綁架的碧姬公主。',
                carttitle: '超級馬力歐',
                img: 'img/shop/8.jpg',
                imgtwo: 'img/shop/8-1.jpg',
                price: 150,
                amount: 0,
                amountShow: 1
            },
            {
                title: '奧德賽',
                title2: '瑪利歐將在更廣闊的遊戲世界場景中活動，每個遊戲場景以不同名稱的「王國」命名，瑪利歐可以通過駕駛一艘帽子形狀的飛艇「奧德賽」號在各個王國間穿梭，玩家將通過收集每個王國中的力量之月為「奧德賽號」補充前往下一個王國的燃料。',
                carttitle: '奧德賽',
                img: 'img/shop/9.jpg',
                imgtwo: 'img/shop/9-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: '馬力歐賽車',
                title2: '一款集合了許多瑪利歐系列裡的人物做成的卡丁車式的賽車遊戲。玩家開過一個道具箱可得到一個道具（SFC版則是「平面版」），可用來防禦、攻擊其他對手、也可用來增加自己的速度。每一款遊戲都有許多不同可一人或多人玩的模式。',
                carttitle: '馬力歐賽車',
                img: 'img/shop/10.jpg',
                imgtwo: 'img/shop/10-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: '路易洋樓3',
                title2: '在遊戲中，玩家仍與往常一樣控制角色在洋樓中探險並使用鬼怪吸塵器捕捉鬼魂。但與之不同在於新增了多項角色能力和「傀易吉」模式。同時，也對多人模式進行調整，支援8名玩家共同遊玩「恐怖高塔」模式。',
                carttitle: '路易洋樓3',
                img: 'img/shop/11.jpg',
                imgtwo: 'img/shop/11-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: '馬力歐摺紙王國',
                title2: '本作融合了角色扮演遊戲、動作冒險遊戲和解謎遊戲的元素。玩家操縱瑪利歐在一片完整的遊戲地圖中探索。遊戲的戰鬥系統為回合制，玩家需要在一塊圓環形的拼板上進行解謎。拼板被劃分為內外4圈和12個扇形，敵人分散在這48個格子內。玩家可以沿著某一圈轉動圓環，或者沿著正對的某一對扇形滑動圓環，目標是將敵人排列成特定陣型，以更快消滅敵人。',
                carttitle: '馬力歐摺紙王國',
                img: 'img/shop/12.jpg',
                imgtwo: 'img/shop/12-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: '無線控制器',
                title2: '是任天堂電子遊戲機任天堂Switch的遊戲控制器，可替代Joy-Con。最多可供八台Pro控制器同步遊玩。',
                carttitle: '無線控制器',
                img: 'img/shop/13.jpg',
                imgtwo: 'img/shop/13-1.jpg',
                price: 150,
                amount: 0,
                amountShow: 1
            },
            {
                title: '主機底座',
                title2: '可以通過HDMI輸出1920x1080像素的畫面，還可以為Switch主機充電。底座上還有3個USB介面（2個USB2.0、1個USB3.0），使用者可以通過USB介面連接鍵盤等硬體外設。',
                carttitle: '主機底座',
                img: 'img/shop/14.png',
                imgtwo: 'img/shop/14-1.png',
                price: 150,
                amount: 0,
                amountShow: 1
            },
            {
                title: 'Ring-Con、控制器固定帶',
                title2: '健身環直徑約30公分，以聚酯纖維和尼龍製成，具有彈性。健身環內有擠壓感測器以感測玩家的動作。',
                carttitle: 'Ring-Con、控制器固定帶',
                img: 'img/shop/15.png',
                imgtwo: 'img/shop/15-1.png',
                price: 200,
                amount: 0,
                amountShow: 1
            },
            {
                title: 'Joy-Con',
                title2: 'Joy-Con是任天堂Switch遊戲機的主要控制器。它分為獨立的兩隻，每隻都含一個類比搖杆和一組按鍵。Joy-Con可以裝在任天堂Switch主機上使用，也可以卸下來無線連結主機使用；分離時一對Joy-Con可供一名玩家使用，也可供兩名玩家各用一隻。',
                carttitle: 'Joy-Con',
                img: 'img/shop/16.png',
                imgtwo: 'img/shop/16-1.png',
                price: 150,
                amount: 0,
                amountShow: 1
            },
            {
                title: 'Joy-Con方向盤',
                title2: 'Joy-Con左右手把可從方向盤自由取下 · 盡情體驗方向盤操控的競速刺激感 · 與多人一起沉浸在競速對戰的遊戲中，適用於馬力歐賽車。',
                carttitle: 'Joy-Con方向盤',
                img: 'img/shop/17.jpg',
                imgtwo: 'img/shop/17-1.jpg',
                price: 200,
                amount: 0,
                amountShow: 1
            },
            {
                title: 'Joy-Con充電握把',
                title2: '將控制器插入另售的充電握把，用USB-C連接充電主機底座亦可充電。',
                carttitle: 'Joy-Con充電握把',
                img: 'img/shop/18.jpg',
                imgtwo: 'img/shop/18-1.jpg',
                price: 50,
                amount: 0,
                amountShow: 1
            },
            {
                title: '超級瑪利歐 3D世界 ＋ 狂怒世界',
                title2: '是任天堂於2020年9月3日在《超級瑪利歐兄弟35周年直面會》發表，宣佈於2021年2月12日在任天堂Switch平台上發售的一款遊戲。相對在Wii U平台上原來版本的3D世界，Switch版追加了網路聯機遊玩與拍照模式及另一邊的全新內容 狂怒世界(Fury World)。',
                carttitle: '超級瑪利歐 3D世界 ＋ 狂怒世界',
                img: 'img/shop/19.jpg',
                imgtwo: 'img/shop/19-1.jpg',
                price: 250,
                amount: 0,
                amountShow: 1
            },
            {
                title: '瑪利歐索尼克 2020東京奧運',
                title2: '「瑪利歐」與「索尼克 (音速小子) 」將和夥伴們一起在奧運舞台上大放光芒。 競技類別除了田徑、游泳、球技之外，還有本屆大會中新增的競技項目──滑板、衝浪、運動攀登、空手道等等，總共收錄了 21 種競技項目。',
                carttitle: '瑪利歐索尼克 2020東京奧運',
                img: 'img/shop/20.jpg',
                imgtwo: 'img/shop/20-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: '節奏健身 FiNC HOME FiT 中文版',
                title2: '由手機健身APP「FiNC」監修，準備了以拳擊、空手道、泰拳、功夫等各種格鬥技動作為基礎， 搭配具高度脂肪燃燒效果的有氧運動及均衡鍛鍊全身肌肉力量的訓練，只要隨著節奏明確的音樂擺動身體，任何人都能開心進行具高度脂肪燃燒效果的鍛鍊。 ',
                carttitle: '節奏健身 FiNC HOME FiT 中文版',
                img: 'img/shop/21.jpg',
                imgtwo: 'img/shop/21-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: 'NBA 2K22',
                title2: '讓玩家掌握整個籃球世界。 「快速比賽」讓玩家立即置身在真實的NBA 和WNBA 環境中對抗真實的球隊與球員。 在MyTEAM 裡用當今的明星和過往的傳奇人物打造自己的夢幻球隊。 在MyCAREER 裡實現成為職業球員的夢想，體驗挺進NBA 的崛起旅程。',
                carttitle: 'NBA 2K22',
                img: 'img/shop/22.jpg',
                imgtwo: 'img/shop/22-1.jpg',
                price: 100,
                amount: 0,
                amountShow: 1
            },
            {
                title: '任天堂明星大亂鬥',
                title2: '大亂鬥系列的最新作品，集結了任天堂旗下眾多作品的人氣角色，以及跨刀演出的合作廠商角色，不重複角色高達 70 名，跨界亂鬥的程度可說是媲美「張飛打岳飛」，是歷年來陣容最多、最豐富的一款作品！看來玩家們在選角色時可得傷腦筋囉！',
                carttitle: '任天堂明星大亂鬥',
                img: 'img/shop/31.jpg',
                imgtwo: 'img/shop/31-1.jpg',
                price: 250,
                amount: 0,
                amountShow: 1
            },
            {
                title: '勇者鬥惡龍 XI S 尋覓逝去的時光',
                title2: '『勇者鬥惡龍XI S』是傳奇 RPG 系列最新作品，這是系列第十一部主要作品，包含全新角色、美麗精細的遊戲世界、設計精良的回合制戰鬥、令人沉浸其中的故事，無論是長期支持本系列的玩家或冒險新手，都能獲得完整的遊戲體驗。',
                carttitle: '勇者鬥惡龍 XI S 尋覓逝去的時光',
                img: 'img/shop/32.jpg',
                imgtwo: 'img/shop/32-1.jpg',
                price: 250,
                amount: 0,
                amountShow: 1
            },
            {
                title: '寶可夢　盾',
                title2: '《寶可夢 劍／盾》是自《精靈寶可夢 紅／綠》誕生以來一直延續至今的《寶可夢》系列的全新作品。在本作中，玩家將在全新舞台與新的寶可夢相遇，展開全新的冒險旅程。本次的冒險舞台 -「伽勒爾地區」。從恬靜的田園到近代都市，從廣闊草原到險峻雪山...廣大的伽勒爾地區擁有千變萬化的面貌。在這片土地上，人們與寶可夢一起生活，互相合作發展產業。遊戲主角將造訪伽勒爾地區的各座「道館」，朝成為憧憬中的冠軍為目標展開冒險。',
                carttitle: '勇者鬥惡龍 XI S 尋覓逝去的時光',
                img: 'img/shop/33.jpg',
                imgtwo: 'img/shop/33-1.jpg',
                price: 250,
                amount: 0,
                amountShow: 1
            },
            {
                title: '寶可夢　劍',
                title2: '在《精靈寶可夢》系列第8世代的最新作《寶可夢 劍／盾》中，將以英國為藍本的「伽勒爾地區」為舞台。從恬靜的田園到近代都市、從廣闊的草原到險峻的雪山，廣大的伽勒爾地區擁有千變萬化的面貌。在這片土地上，人們與寶可夢一起生活，互相合作發展產業。玩家所扮演的主角將造訪伽勒爾地區的各座「道館」，朝成為憧憬中的冠軍為目標，體驗屬於自己的冒險旅程。',
                carttitle: '勇者鬥惡龍 XI S 尋覓逝去的時光',
                img: 'img/shop/34.jpg',
                imgtwo: 'img/shop/34-1.jpg',
                price: 250,
                amount: 0,
                amountShow: 1
            },
            {
                title: '薩爾達傳說 曠野之息',
                title2: '《薩爾達傳說 曠野之息》是問世至今已 31 年的《薩爾達傳說》系列最新作，首度採用開放世界架構來呈現廣大的海拉魯世界。收錄豐富的探索、解謎與收集要素，革新的戰鬥系統及趣味的物理化學環境互動要素。背景舞台發生在因大災禍而滅亡的海拉魯王國，距事變過的100年後，主角林克從地下遺跡的長眠中甦醒，在不可思議的聲音引導下展開冒險...。',
                carttitle: '勇者鬥惡龍 XI S 尋覓逝去的時光',
                img: 'img/shop/35.jpg',
                imgtwo: 'img/shop/35-1.jpg',
                price: 250,
                amount: 0,
                amountShow: 1
            },
            {
                title: '集合啦！動物森友會',
                title2: '玩家將參加由 Nook Inc.所策劃的「無人島移居計畫」，在以無人島為背景的遊戲中展開全新的生活。在遊戲中可以悠閒地在海邊漫步、四處探索...在什麼都沒有的無人島展開自由自在的生活。另外，還有全新改造系統，讓玩家可以DIY，將島上的材料收集起來，DIY成家具及生活所需的道具等等。此外，還有園藝、釣魚、島上探索、居家環境佈置、與移居到島上的可愛動物們交流等多項體驗，讓玩家可以一面感受四季變化，一面享受悠閒生活。',
                carttitle: '勇者鬥惡龍 XI S 尋覓逝去的時光',
                img: 'img/shop/36.jpg',
                imgtwo: 'img/shop/36-1.jpg',
                price: 250,
                amount: 0,
                amountShow: 1
            },
            {
                title: 'Switch主機',
                title2: '可透過連接家中的電視機等的家用電視遊戲機，同時也可拿著搭載 6.2 吋液晶螢幕主機，無論何時何地都可和任何人遊玩的任天堂新型號電視遊戲機。提供可以將遊戲畫面投放到電視以「TV 模式」玩遊戲、拉出主機背面的支架放在桌面上，一邊看著主機螢幕，一邊拿著 Joy-Con 來玩的「桌上模式」、將 Joy-Con 安裝到主機上，像手提遊戲機一樣拿著主機來玩的「手提模式」',
                carttitle: '勇者鬥惡龍 XI S 尋覓逝去的時光',
                img: 'img/shop/25.jpg',
                imgtwo: 'img/shop/25-1.jpg',
                price: 250,
                amount: 0,
                amountShow: 1
            },
        ],
        productIndex: 0,
        optionIndex: 0,
    },
    methods: {
        minus(shop) {
            shop.amountShow-- /*減少*/
            shop.amountShow = (shop.amountShow < 1) ?1 : shop.amountShow /*最小值*/
        },
        plus(shop) {
            shop.amountShow++ /*增加*/
            shop.amountShow = (shop.amountShow > 10) ? 10 : shop.amountShow /*最大值*/
        },
        addToCart(product) {
            product.amount += product.amountShow
        },
        remove(product) {
            product.amount = 0
        },
        productcart(productInCart){
			if(productInCart == 0){
				alert('目前購物車為空。');
				return	false
			}
			else{                
                var total = 0;
                productInCart.forEach(e => total += e.amount * e.price);
                checkout(total);
                alert('訂單已送出，購物明細已寄至您的電子郵箱，如有疑問請聯繫客服。');
				productInCart.forEach(e => e.amount=0);
			}
		},
		signin(){
            var loginPayload = {};
			loginPayload.account = this.account;
            loginPayload.password = this.password;
            sign_in(loginPayload);
		},
		signup(){
            var registerPayload = {};
            registerPayload.username = this.name;
            registerPayload.mail = this.email;
            registerPayload.account = this.account1;
            registerPayload.password = this.password1;
            sign_up(registerPayload);
		},
    },
    computed: {
        productInCart() {
            return this.products
                .filter(p => p.amount)
                .map(p => {
                    p.sum = p.price * p.amount
                    p.num = p.amount
                    return p
                })
        },
        total() {
            return this.productInCart
                .reduce((sum, p) => (p.sum + sum), 0)
        },
        num() {
            return this.productInCart
                .reduce((num, p) => (p.num + num), 0)
        },
        product() {
            return this.products[this.productIndex]
        }
    }
})