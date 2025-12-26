export interface CountryConfig {
  code: string;
  name: string;
  phonePrefix: string;
  phoneFormat: string;
}

// 你的 countries 数组保持不变
export const countries: CountryConfig[] = [
  { code: 'CN', name: '中国', phonePrefix: '+86', phoneFormat: '1XXXXXXXXXX' },
  { code: 'HK', name: '香港', phonePrefix: '+852', phoneFormat: 'XXXX XXXX' },
  { code: 'TW', name: '台湾', phonePrefix: '+886', phoneFormat: 'XXXX XXX XXX' },
  { code: 'MO', name: '澳门', phonePrefix: '+853', phoneFormat: 'XXXX XXXX' },
  { code: 'SG', name: '新加坡', phonePrefix: '+65', phoneFormat: 'XXXX XXXX' },
  { code: 'US', name: '美国', phonePrefix: '+1', phoneFormat: 'XXX-XXX-XXXX' },
  { code: 'JP', name: '日本', phonePrefix: '+81', phoneFormat: 'XX-XXXX-XXXX' },
  { code: 'GB', name: '英国', phonePrefix: '+44', phoneFormat: 'XXXX XXX XXX' },
  { code: 'DE', name: '德国', phonePrefix: '+49', phoneFormat: 'XXX XXXXXXXX' },
  { code: 'FR', name: '法国', phonePrefix: '+33', phoneFormat: 'X XX XX XX XX' },
  { code: 'KR', name: '韩国', phonePrefix: '+82', phoneFormat: 'XX-XXXX-XXXX' },
  { code: 'CA', name: '加拿大', phonePrefix: '+1', phoneFormat: 'XXX-XXX-XXXX' },
  { code: 'AU', name: '澳大利亚', phonePrefix: '+61', phoneFormat: 'XXX XXX XXX' },
  { code: 'IT', name: '意大利', phonePrefix: '+39', phoneFormat: 'XXX XXX XXXX' },
  { code: 'ES', name: '西班牙', phonePrefix: '+34', phoneFormat: 'XXX XX XX XX' },
  { code: 'BR', name: '巴西', phonePrefix: '+55', phoneFormat: 'XX XXXXX-XXXX' },
  { code: 'RU', name: '俄罗斯', phonePrefix: '+7', phoneFormat: 'XXX XXX-XX-XX' },
  { code: 'IN', name: '印度', phonePrefix: '+91', phoneFormat: 'XXXXX XXXXX' },
  { code: 'MX', name: '墨西哥', phonePrefix: '+52', phoneFormat: 'XXX XXX XXXX' },
  { code: 'NL', name: '荷兰', phonePrefix: '+31', phoneFormat: 'X XXXXXXXX' },
  { code: 'SE', name: '瑞典', phonePrefix: '+46', phoneFormat: 'XX-XXX XX XX' },
  { code: 'CH', name: '瑞士', phonePrefix: '+41', phoneFormat: 'XX XXX XX XX' },
  { code: 'PL', name: '波兰', phonePrefix: '+48', phoneFormat: 'XXX XXX XXX' },
  { code: 'TR', name: '土耳其', phonePrefix: '+90', phoneFormat: 'XXX XXX XX XX' },
  { code: 'TH', name: '泰国', phonePrefix: '+66', phoneFormat: 'XX XXX XXXX' },
  { code: 'MY', name: '马来西亚', phonePrefix: '+60', phoneFormat: 'XX-XXX XXXX' },
  { code: 'ID', name: '印度尼西亚', phonePrefix: '+62', phoneFormat: 'XXX-XXX-XXXX' },
  { code: 'PH', name: '菲律宾', phonePrefix: '+63', phoneFormat: 'XXX XXX XXXX' },
  { code: 'VN', name: '越南', phonePrefix: '+84', phoneFormat: 'XXX XXX XXXX' },
];

export const namesByCountry: Record<string, { firstNames: string[], lastNames: string[] }> = {
  // 中国大陆：简体中文
  CN: {
    firstNames: [
      '伟', '芳', '娜', '秀英', '敏', '静', '丽', '强', '磊', '军', '洋', '勇', '艳', '杰', '娟', '涛', '明', '超', '秀兰', '霞',
      '平', '刚', '桂英', '桂兰', '云', '建华', '建国', '志强', '海燕', '志明', '红', '玲', '浩', '波', '鑫', '鹏', '辉', '玉兰', '婷', '英',
      '华', '慧', '巧', '雪', '梅', '龙', '萍', '丹', '宇', '成', '欣', '博', '子涵', '梓萱', '一诺', '浩宇', '欣怡', '雨桐', '诗涵', '俊杰'
    ],
    lastNames: [
      '李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '胡', '朱', '高', '林', '何', '郭', '马', '罗',
      '梁', '宋', '郑', '谢', '韩', '唐', '冯', '于', '董', '萧', '程', '曹', '袁', '邓', '许', '傅', '沈', '曾', '彭', '吕',
      '苏', '卢', '蒋', '蔡', '贾', '丁', '魏', '薛', '叶', '阎', '余', '潘', '杜', '戴', '夏', '钟', '汪', '田', '任', '姜'
    ]
  },
  // 香港：繁体中文
  HK: {
    firstNames: [
      '家輝', '嘉欣', '志明', '美玲', '偉文', '淑儀', '志華', '麗華', '永勝', '惠貞', '文強', '詠詩', '國榮', '秀英', '建國', '美儀', '志強', '玉珍', '俊傑', '海燕',
      '振邦', '月娥', '家豪', '佩珊', '永康', '麗珍', '志偉', '美珍', '家明', '少芬', '偉強', '麗娜', '建華', '惠玲', '永強', '淑芬', '志平', '麗萍', '國華', '秀蘭',
      '振華', '美娟', '家偉', '嘉敏', '永昌', '麗珠', '志成', '美玉', '家俊', '潔雯', '浩然', '曉彤', '子軒', '樂怡', '柏豪', '芷晴', '俊緯', '凱琳', '卓賢', '思敏'
    ],
    lastNames: [
      '陳', '黃', '李', '林', '張', '梁', '吳', '劉', '郭', '周', '何', '鄭', '胡', '蔡', '許', '楊', '葉', '曾', '鄧', '馮',
      '王', '謝', '馬', '蘇', '羅', '潘', '朱', '鍾', '廖', '伍', '方', '余', '趙', '湯', '杜', '江', '魏', '徐', '彭', '盧',
      '袁', '沈', '田', '高', '蕭', '賴', '霍', '莫', '洪', '姚', '丁', '譚', '區', '黎', '關', '嚴', '歐', '錢', '戴', '薛'
    ]
  },
  // 台湾：繁体中文
  TW: {
    firstNames: [
      '家豪', '淑芬', '志明', '淑惠', '俊傑', '美玲', '建宏', '雅婷', '志偉', '美惠', '志強', '麗華', '承翰', '淑娟', '冠宇', '淑貞', '建志', '玉蘭', '彥廷', '秀英',
      '冠志', '美玉', '建國', '雅雯', '柏翰', '秀琴', '家瑋', '怡君', '宗翰', '淑萍', '志豪', '惠珍', '柏宏', '玉珍', '建華', '麗君', '信宏', '寶猜', '明锋', '月娥',
      '冠廷', '雅慧', '俊宏', '麗芬', '智偉', '靜怡', '偉哲', '秀蘭', '家興', '美娟', '品睿', '品妍', '宥杉', '詠晴', '子晴', '宇恩', '品妤', '子翔', '宥廷', '禹彤'
    ],
    lastNames: [
      '陳', '林', '黃', '張', '李', '王', '吳', '劉', '蔡', '楊', '許', '鄭', '謝', '洪', '郭', '邱', '曾', '廖', '賴', '徐',
      '周', '葉', '蘇', '莊', '呂', '江', '何', '蕭', '羅', '高', '潘', '簡', '朱', '鍾', '彭', '游', '詹', '胡', '施', '沈',
      '余', '盧', '梁', '趙', '顏', '柯', '翁', '魏', '孫', '戴', '范', '方', '宋', '鄧', '杜', '傅', '侯', '曹', '薛', '丁'
    ]
  },
  // 澳门：繁体中文
  MO: {
    firstNames: [
      '志明', '嘉欣', '偉傑', '麗華', '建邦', '淑敏', '志強', '美玲', '國豪', '惠芳', '偉文', '佩琼', '永康', '麗珍', '志偉', '美珍', '家明', '少芬', '偉強', '麗娜',
      '建華', '惠玲', '永強', '淑芬', '志平', '麗萍', '國華', '秀蘭', '振華', '美娟', '家偉', '嘉敏', '永昌', '麗珠', '志成', '美玉', '家俊', '潔雯', '浩然', '曉彤',
      '梓軒', '芷琪', '俊宏', '樂瑤', '子峰', '凱晴', '智賢', '曉琳', '柏霖', '詩雅', '偉倫', '敏儀', '國樑', '靜文', '家樂', '婉儀', '振興', '佩儀', '志華', '慧心'
    ],
    lastNames: [
      '陳', '黃', '李', '林', '張', '梁', '吳', '劉', '郭', '周', '何', '鄭', '胡', '蔡', '許', '楊', '葉', '曾', '鄧', '馮',
      '王', '謝', '馬', '蘇', '羅', '潘', '朱', '鍾', '廖', '伍', '方', '余', '趙', '湯', '杜', '江', '魏', '徐', '彭', '盧',
      '袁', '沈', '田', '高', '蕭', '賴', '霍', '莫', '洪', '姚', '丁', '譚', '區', '黎', '關', '嚴', '歐', '錢', '戴', '薛'
    ]
  },
  // 新加坡：英文 (官方及商务通用)
  SG: {
    firstNames: [
      'Wei Ming', 'Hui Ling', 'Jun Jie', 'Xin Yi', 'Jian Hong', 'Li Lian', 'Guo Qiang', 'Siew Ling', 'Zhi Wei', 'Mei Ling',
      'Wei Lun', 'Pei Shan', 'Yi Ling', 'Jia Hui', 'Kai Wen', 'Shu Min', 'Wei Jie', 'Hui Min', 'Jun Wei', 'Yi Ting',
      'Zi Yang', 'Jia Yi', 'Wei Xiang', 'Hui Shan', 'Guan Yu', 'Xin Hui', 'Zhi Hao', 'Li Ting', 'Ming Hui', 'Wan Ling',
      'Aloysius', 'Benjamin', 'Clement', 'Derrick', 'Edmund', 'Fabian', 'Gabriel', 'Ivan', 'Jason', 'Kelvin',
      'Alicia', 'Bernice', 'Charmaine', 'Daphne', 'Evelyn', 'Fiona', 'Grace', 'Hazel', 'Jasmine', 'Kelly', 'Rachel'
    ],
    lastNames: [
      'Tan', 'Lim', 'Lee', 'Ng', 'Ong', 'Wong', 'Goh', 'Chua', 'Chan', 'Koh',
      'Teo', 'Ang', 'Yeo', 'Tay', 'Ho', 'Low', 'Toh', 'Sim', 'Chong', 'Chia',
      'Seah', 'Khoo', 'Foo', 'Gwee', 'Oh', 'Phua', 'Heng', 'Kwek', 'Lau', 'Kang',
      'Wee', 'Chee', 'Lian', 'Neo', 'Loo', 'Soh', 'Tang', 'Pang', 'Yong', 'Fong',
      'Chiu', 'Mok', 'Kuah', 'Liew', 'Quek', 'Peh', 'Gan', 'Chow', 'Yip', 'Teng'
    ]
  },
  // 美国：英文
  US: {
    firstNames: [
      'James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'David', 'Elizabeth',
      'William', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen',
      'Christopher', 'Lisa', 'Daniel', 'Nancy', 'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra',
      'Donald', 'Ashley', 'Steven', 'Kimberly', 'Paul', 'Emily', 'Andrew', 'Donna', 'Joshua', 'Michelle',
      'Kenneth', 'Carol', 'Kevin', 'Amanda', 'Brian', 'Dorothy', 'George', 'Melissa', 'Edward', 'Deborah',
      'Jacob', 'Liam', 'Noah', 'Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella', 'Mia', 'Charlotte'
    ],
    lastNames: [
      'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
      'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
      'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
      'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
      'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts'
    ]
  },
  // 日本：日文汉字 (Kanji)
  JP: {
    firstNames: [
      // 男性名
      'しょう', 'だいすけ', 'けんた', 'まこと', 'つよし', 'なおと', 'たくや', 'たつや', 'なおき', 'てつや', 
      'しょうた', 'つばさ', 'たくみ', 'りく', 'れん', 'はると', 'だいき', 'ゆうま', 'ゆうま', 'みなと',
      
      // 女性名
      'ようこ', 'けいこ', 'くみこ', 'かおり', 'みさき', 'あい', 'ともこ', 'まゆみ', 'ゆうこ', 'かな', 
      'みらい', 'あおい', 'ひな', 'ゆい', 'りん', 'ゆいな', 'りこ', 'めい', 'つむぎ', 'みつき',
      
      // 经典男性名
      'いちろう', 'じろう', 'さぶろう', 'しろう', 'ごろう', 'かずや', 'たつろう', 'しゅうへい', 'こうへい', 'けんいち',
      
      // 经典女性名
      'はなこ', 'よしこ', 'あけみ', 'なおみ', 'ゆみ', 'りえ', 'まり', 'みき', 'あみ', 'みか'
    ],
    lastNames: [
      'さとう', 'すずき', 'たかはし', 'たなか', 'いとう', 'わたなべ', 'やまもと', 'なかむら', 'こばやし', 'かとう',
      'よしだ', 'やまだ', 'ささき', 'やまぐち', 'まつもと', 'いのうえ', 'きむら', 'はやし', 'さいとう', 'しみず',
      'やまざき', 'もり', 'いけだ', 'はしもと', 'あべ', 'いしかわ', 'やました', 'なかじま', 'いしい', 'おがわ',
      'まえだ', 'おかだ', 'はせがわ', 'ふじた', 'ごとう', 'こんどう', 'むらかみ', 'えんどう', 'あおき', 'さかもと',
      'さいとう', 'ふくだ', 'おおた', 'にしむら', 'ふじい', 'かねこ', 'おかもと', 'ふじわら', 'なかの', 'みうら'
    ]
  },
  // 英国：英文
  GB: {
    firstNames: [
      'Oliver', 'George', 'Harry', 'Noah', 'Jack', 'Leo', 'Arthur', 'Muhammad', 'Oscar', 'Charlie',
      'Thomas', 'Henry', 'William', 'Alfie', 'Archie', 'Joshua', 'Freddie', 'Theo', 'Isaac', 'James',
      'Olivia', 'Amelia', 'Isla', 'Ava', 'Mia', 'Ivy', 'Lily', 'Isabella', 'Rosie', 'Sophia',
      'Grace', 'Freya', 'Willow', 'Florence', 'Emily', 'Ella', 'Poppy', 'Evie', 'Elsie', 'Charlotte',
      'David', 'Paul', 'Mark', 'Stephen', 'John', 'Susan', 'Margaret', 'Sarah', 'Karen', 'Janet',
      'Alexander', 'Daniel', 'Edward', 'Samuel', 'Joseph', 'Benjamin', 'Lewis', 'Callum', 'Connor', 'Harrison'
    ],
    lastNames: [
      'Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Roberts',
      'Johnson', 'Lewis', 'Walker', 'Robinson', 'Wood', 'Thompson', 'White', 'Watson', 'Jackson', 'Wright',
      'Green', 'Harris', 'Cooper', 'King', 'Lee', 'Martin', 'Clarke', 'James', 'Morgan', 'Hughes',
      'Edwards', 'Hill', 'Moore', 'Clark', 'Harrison', 'Scott', 'Young', 'Morris', 'Hall', 'Ward',
      'Turner', 'Carter', 'Phillips', 'Mitchell', 'Patel', 'Adams', 'Campbell', 'Anderson', 'Allen', 'Cook'
    ]
  },
  // 德国：德文 (包含 Umlauts)
  DE: {
    firstNames: [
      'Maximilian', 'Alexander', 'Paul', 'Elias', 'Ben', 'Noah', 'Leon', 'Louis', 'Jonas', 'Felix',
      'Thomas', 'Michael', 'Andreas', 'Peter', 'Frank', 'Christian', 'Stefan', 'Klaus', 'Daniel', 'Jürgen',
      'Maria', 'Sophie', 'Marie', 'Mia', 'Emma', 'Hannah', 'Emilia', 'Anna', 'Johanna', 'Lea',
      'Ursula', 'Monika', 'Karin', 'Helga', 'Renate', 'Sabine', 'Ingrid', 'Petra', 'Elke', 'Brigitte',
      'Lukas', 'Finn', 'Luis', 'Luca', 'Julian', 'Matteo', 'Henry', 'Oskar', 'Anton', 'Theo',
      'Laura', 'Julia', 'Sarah', 'Lisa', 'Lena', 'Lara', 'Melanie', 'Nicole', 'Sandra', 'Stefanie'
    ],
    lastNames: [
      'Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann',
      'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann',
      'Braun', 'Krüger', 'Hofmann', 'Hartmann', 'Lange', 'Schmitt', 'Werner', 'Schmitz', 'Krause', 'Meier',
      'Lehmann', 'Schmid', 'Schulze', 'Maier', 'Köhler', 'Herrmann', 'König', 'Walter', 'Mayer', 'Huber',
      'Kaiser', 'Fuchs', 'Peters', 'Lang', 'Scholz', 'Möller', 'Weiß', 'Jung', 'Hahn', 'Keller'
    ]
  },
  // 法国：法文 (包含 Accents)
  FR: {
    firstNames: [
      'Jean', 'Michel', 'Philippe', 'Pierre', 'Alain', 'Nicolas', 'Christophe', 'Patrick', 'Christian', 'Daniel',
      'Gabriel', 'Léo', 'Raphaël', 'Arthur', 'Louis', 'Lucas', 'Adam', 'Jules', 'Hugo', 'Maël',
      'Marie', 'Nathalie', 'Isabelle', 'Sylvie', 'Catherine', 'Martine', 'Véronique', 'Françoise', 'Monique', 'Christine',
      'Jade', 'Louise', 'Emma', 'Ambre', 'Alice', 'Lina', 'Chloé', 'Mia', 'Léa', 'Rose',
      'Thomas', 'Julien', 'David', 'Sébastien', 'Laurent', 'Frédéric', 'Stéphane', 'Guillaume', 'Alexandre', 'Romain',
      'Céline', 'Sandrine', 'Stéphanie', 'Aurélie', 'Élodie', 'Virginie', 'Julie', 'Sophie', 'Camille', 'Sarah'
    ],
    lastNames: [
      'Martin', 'Bernard', 'Thomas', 'Petit', 'Robert', 'Richard', 'Durand', 'Dubois', 'Moreau', 'Laurent',
      'Simon', 'Michel', 'Lefebvre', 'Leroy', 'Roux', 'David', 'Bertrand', 'Morel', 'Fournier', 'Girard',
      'Bonnet', 'Dupont', 'Lambert', 'Fontaine', 'Rousseau', 'Vincent', 'Muller', 'Lefèvre', 'Faure', 'André',
      'Mercier', 'Blanc', 'Guérin', 'Boyer', 'Garnier', 'Chevalier', 'François', 'Legrand', 'Gauthier', 'Garcia',
      'Perrin', 'Robin', 'Clément', 'Morin', 'Nicolas', 'Henry', 'Roussel', 'Mathieu', 'Gautier', 'Masson'
    ]
  },
  // 韩国：韩文 (Hangul)
  KR: {
    firstNames: [
      '민준', '서준', '도윤', '예준', '시우', '하준', '지호', '준우', '주원', '지훈',
      '서연', '서윤', '지우', '서현', '하은', '민서', '지유', '윤서', '채원', '수아',
      '영수', '영호', '영식', '정수', '정호', '성수', '성호', '상훈', '동현', '준호',
      '영자', '정자', '순자', '춘자', '경자', '미경', '은경', '혜진', '지영', '현정',
      '은지', '민지', '수진', '지은', '예진', '유진', '수빈', '지원', '유나', '시현',
      '건우', '우진', '현우', '민재', '현준', '도현', '동한', '승현', '재현', '성민'
    ],
    lastNames: [
      '김', '이', '박', '최', '정', '강', '조', '윤', '장', '임',
      '한', '오', '서', '신', '권', '황', '안', '송', '류', '전',
      '홍', '고', '문', '양', '손', '배', '조', '백', '허', '유',
      '남', '심', '노', '하', '곽', '성', '차', '주', '우', '구',
      '신', '임', '나', '진', '지', '엄', '채', '원', '천', '방'
    ]
  },
  // 加拿大：英文/法文
  CA: {
    firstNames: [
      'Liam', 'Jackson', 'Noah', 'Lucas', 'Oliver', 'William', 'Benjamin', 'Logan', 'Jacob', 'James',
      'Olivia', 'Emma', 'Charlotte', 'Ava', 'Sophia', 'Mia', 'Isabella', 'Amelia', 'Evelyn', 'Abigail',
      'David', 'John', 'Robert', 'Michael', 'Paul', 'Daniel', 'Pierre', 'Michel', 'Richard', 'Jean',
      'Marie', 'Jennifer', 'Sarah', 'Karen', 'Susan', 'Linda', 'Lisa', 'Nancy', 'Sylvie', 'Nathalie',
      'Thomas', 'Ryan', 'Matthew', 'Christopher', 'Adam', 'Nathan', 'Ethan', 'Alexander', 'Gabriel', 'Samuel',
      'Emily', 'Jessica', 'Ashley', 'Megan', 'Hannah', 'Elizabeth', 'Grace', 'Chloé', 'Lily', 'Ella'
    ],
    lastNames: [
      'Smith', 'Brown', 'Tremblay', 'Martin', 'Roy', 'Wilson', 'Gagnon', 'Lee', 'Johnson', 'Bouchard',
      'Gauthier', 'Morin', 'Lavoie', 'Fortin', 'Côté', 'Pelletier', 'Bélanger', 'Lévesque', 'Bergeron', 'Leblanc',
      'Paquette', 'Girard', 'Simard', 'Ouellet', 'Caron', 'Dubé', 'Beaulieu', 'Cloutier', 'Fournier', 'Lapointe',
      'Williams', 'Jones', 'Miller', 'Davis', 'Anderson', 'Taylor', 'Moore', 'White', 'Thompson', 'Clark',
      'Young', 'Robinson', 'Walker', 'Hall', 'Lewis', 'Harris', 'Campbell', 'King', 'Wright', 'Scott'
    ]
  },
  // 澳大利亚：英文
  AU: {
    firstNames: [
      'Oliver', 'Noah', 'Jack', 'William', 'Leo', 'Lucas', 'Thomas', 'Henry', 'Charlie', 'James',
      'Charlotte', 'Olivia', 'Amelia', 'Isla', 'Mia', 'Ava', 'Grace', 'Willow', 'Harper', 'Chloe',
      'Peter', 'David', 'Michael', 'John', 'Paul', 'Andrew', 'Christopher', 'Matthew', 'Mark', 'Daniel',
      'Jennifer', 'Michelle', 'Kylie', 'Lisa', 'Karen', 'Sarah', 'Nicole', 'Susan', 'Jessica', 'Rebecca',
      'Ethan', 'Mason', 'Harrison', 'Lachlan', 'Samuel', 'Hunter', 'Archie', 'Levi', 'Joshua', 'Max',
      'Ruby', 'Zoe', 'Evie', 'Sophie', 'Sienna', 'Matilda', 'Lily', 'Ella', 'Isabella', 'Emily'
    ],
    lastNames: [
      'Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Nguyen', 'Johnson', 'Martin', 'White',
      'Anderson', 'Walker', 'Thompson', 'Thomas', 'Lee', 'Harris', 'Ryan', 'Robinson', 'Kelly', 'King',
      'Campbell', 'Mitchell', 'Clarke', 'Young', 'Wright', 'Evans', 'Davis', 'Miller', 'Moore', 'Roberts',
      'Scott', 'Wood', 'Hall', 'Hill', 'Green', 'Adams', 'Clark', 'Baker', 'Lewis', 'Turner',
      'Jackson', 'Watson', 'Cook', 'Murphy', 'Bell', 'Ward', 'James', 'Morgan', 'Phillips', 'Cooper'
    ]
  },
  // 意大利：意大利文
  IT: {
    firstNames: [
      'Leonardo', 'Francesco', 'Alessandro', 'Lorenzo', 'Mattia', 'Tommaso', 'Gabriele', 'Andrea', 'Riccardo', 'Edoardo',
      'Sofia', 'Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Giorgia', 'Greta', 'Beatrice', 'Anna',
      'Giuseppe', 'Giovanni', 'Antonio', 'Mario', 'Luigi', 'Roberto', 'Angelo', 'Vincenzo', 'Pietro', 'Salvatore',
      'Maria', 'Anna', 'Rosa', 'Angela', 'Giovanna', 'Teresa', 'Lucia', 'Carmela', 'Francesca', 'Antonietta',
      'Marco', 'Luca', 'Paolo', 'Michele', 'Davide', 'Matteo', 'Fabio', 'Stefano', 'Simone', 'Daniele',
      'Elena', 'Sara', 'Chiara', 'Silvia', 'Laura', 'Valentina', 'Roberta', 'Daniela', 'Alessandra', 'Federica'
    ],
    lastNames: [
      'Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo', 'Ricci', 'Marino', 'Greco',
      'Bruno', 'Gallo', 'Conti', 'De Luca', 'Mancini', 'Costa', 'Giordano', 'Rizzo', 'Lombardi', 'Moretti',
      'Barbieri', 'Fontana', 'Santoro', 'Mariani', 'Rinaldi', 'Caruso', 'Ferrara', 'Galli', 'Martini', 'Leone',
      'Longo', 'Gentile', 'Martinelli', 'Vitale', 'Lombardo', 'Serra', 'Coppola', 'De Santis', 'D\'Angelo', 'Marchetti',
      'Parisi', 'Villa', 'Conte', 'Ferraro', 'Ferri', 'Fabbri', 'Bianco', 'Marchetti', 'Grasso', 'Valentini'
    ]
  },
  // 西班牙：西班牙文 (包含 Accents)
  ES: {
    firstNames: [
      'Antonio', 'José', 'Manuel', 'Francisco', 'David', 'Juan', 'Javier', 'José Antonio', 'Daniel', 'José Luis',
      'María', 'Carmen', 'Ana', 'Isabel', 'Dolores', 'Pilar', 'Teresa', 'Rosa', 'Cristina', 'Antonia',
      'Hugo', 'Martín', 'Lucas', 'Mateo', 'Leo', 'Daniel', 'Alejandro', 'Pablo', 'Manuel', 'Álvaro',
      'Lucía', 'Sofía', 'Martina', 'María', 'Julia', 'Paula', 'Valeria', 'Emma', 'Daniela', 'Carla',
      'Carlos', 'Jesús', 'Miguel', 'Ángel', 'Rafael', 'Pedro', 'Luis', 'Sergio', 'Fernando', 'Jorge',
      'Laura', 'Elena', 'Mercedes', 'Marta', 'Rosario', 'Juana', 'Manuela', 'Beatriz', 'Nuria', 'Silvia'
    ],
    lastNames: [
      'García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Martín',
      'Jiménez', 'Ruiz', 'Hernández', 'Díaz', 'Moreno', 'Muñoz', 'Álvarez', 'Romero', 'Alonso', 'Gutiérrez',
      'Navarro', 'Torres', 'Domínguez', 'Vázquez', 'Ramos', 'Gil', 'Ramírez', 'Serrano', 'Blanco', 'Molina',
      'Morales', 'Suárez', 'Ortega', 'Delgado', 'Castro', 'Ortiz', 'Rubio', 'Marín', 'Sanz', 'Núñez',
      'Iglesias', 'Medina', 'Garrido', 'Cortés', 'Castillo', 'Santos', 'Lozano', 'Guerrero', 'Cano', 'Prieto'
    ]
  },
  // 巴西：葡萄牙文 (包含 Accents)
  BR: {
    firstNames: [
      'José', 'João', 'Antônio', 'Francisco', 'Carlos', 'Paulo', 'Pedro', 'Lucas', 'Luiz', 'Marcos',
      'Maria', 'Ana', 'Francisca', 'Antônia', 'Adriana', 'Juliana', 'Márcia', 'Fernanda', 'Patrícia', 'Aline',
      'Miguel', 'Arthur', 'Heitor', 'Bernardo', 'Davi', 'Théo', 'Lorenzo', 'Gabriel', 'Gaël', 'Bento',
      'Helena', 'Alice', 'Laura', 'Manuela', 'Sophia', 'Isabella', 'Luiza', 'Heloísa', 'Cecília', 'Maitê',
      'Rafael', 'Daniel', 'Marcelo', 'Bruno', 'Eduardo', 'Felipe', 'Raimundo', 'Rodrigo', 'Manoel', 'André',
      'Camila', 'Bruna', 'Larissa', 'Beatriz', 'Letícia', 'Amanda', 'Júlia', 'Jéssica', 'Bianca', 'Mariana'
    ],
    lastNames: [
      'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes',
      'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Almeida', 'Lopes', 'Soares', 'Fernandes', 'Vieira', 'Barbosa',
      'Rocha', 'Dias', 'Nascimento', 'Andrade', 'Moreira', 'Nunes', 'Marques', 'Machado', 'Mendes', 'Freitas',
      'Cardoso', 'Ramos', 'Gonçalves', 'Santana', 'Teixeira', 'Araujo', 'Cavalcanti', 'Pinto', 'Miranda', 'Fonseca',
      'Barros', 'Correia', 'Castro', 'Campos', 'Moura', 'Batista', 'Siqueira', 'Moraes', 'Duarte', 'Reis'
    ]
  },
  // 俄罗斯：西里尔字母 (Cyrillic)
  RU: {
    firstNames: [
      'Александр', 'Сергей', 'Дмитрий', 'Андрей', 'Алексей', 'Максим', 'Евгений', 'Иван', 'Михаил', 'Владимир',
      'Елена', 'Ольга', 'Наталья', 'Татьяна', 'Ирина', 'Светлана', 'Анна', 'Екатерина', 'Марина', 'Галина',
      'Артем', 'Кирилл', 'Никита', 'Илья', 'Егор', 'Матвей', 'Тимофей', 'Роман', 'Арсений', 'Марк',
      'София', 'Мария', 'Анастасия', 'Дарья', 'Виктория', 'Полина', 'Алиса', 'Ксения', 'Александра', 'Вероника',
      'Павел', 'Игорь', 'Юрий', 'Олег', 'Николай', 'Антон', 'Денис', 'Константин', 'Виталий', 'Виктор',
      'Юлия', 'Валентина', 'Людмила', 'Надежда', 'Лариса', 'Любовь', 'Нина', 'Тамара', 'Вера', 'Оксана'
    ],
    lastNames: [
      'Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Федоров',
      'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семенов', 'Егоров', 'Павлов', 'Козлов', 'Степанов', 'Николаев',
      'Орлов', 'Андреев', 'Макаров', 'Никитин', 'Захаров', 'Зайцев', 'Соловьев', 'Борисов', 'Яковлев', 'Григорьев',
      'Романов', 'Воробьев', 'Сергеев', 'Фролов', 'Александров', 'Дмитриев', 'Королев', 'Гусев', 'Киселев', 'Ильин',
      'Максимов', 'Поляков', 'Сорокин', 'Виноградов', 'Ковалев', 'Белов', 'Медведев', 'Антонов', 'Тарасов', 'Жуков'
    ]
  },
  // 印度：印地语天城文 (Devanagari)
  IN: {
    firstNames: [
      'राहुल', 'अमित', 'संदीप', 'रोहित', 'संजय', 'सुनील', 'अजय', 'विकास', 'राजेश', 'मनीष',
      'पूजा', 'नेहा', 'प्रिया', 'स्नेहा', 'अंजलि', 'दिव्या', 'कविता', 'सुनीता', 'अनीता', 'मीना',
      'आरव', 'विवान', 'आदित्य', 'विहान', 'अर्जुन', 'साई', 'रियांश', 'मुहम्मद', 'कृष्णा', 'ईशान',
      'सान्वी', 'अन्या', 'आध्या', 'परी', 'दिया', 'मायरा', 'अनन्या', 'रिया', 'कियारा', 'इरा',
      'विजय', 'रवि', 'अनिल', 'दिनेश', 'दीपक', 'सुरेश', 'रमेश', 'विनोद', 'प्रकाश', 'प्रदीप',
      'दीपिका', 'रेखा', 'सुमन', 'रानी', 'आरती', 'किरण', 'श्वेता', 'ज्योति', 'पिंकी', 'मोनिका'
    ],
    lastNames: [
      'कुमार', 'सिंह', 'शर्मा', 'पटेल', 'यादव', 'गुप्ता', 'मिश्रा', 'खान', 'दास', 'जैन',
      'रेड्डी', 'प्रसाद', 'राव', 'शाह', 'वर्मा', 'नायर', 'चौधरी', 'मेहता', 'अय्यर', 'मेनन',
      'चौहान', 'अग्रवाल', 'पांडेय', 'जोशी', 'भट', 'सिन्हा', 'नाइक', 'गौड़ा', 'कौर', 'मल्होत्रा',
      'भाटिया', 'घोष', 'कुलकर्णी', 'देसाई', 'सक्सेना', 'आचार्य', 'पिल्लई', 'सेठी', 'कपूर', 'बनर्जी',
      'चटर्जी', 'रॉय', 'फर्नांडीस', 'दत्ता', 'रावत', 'हेगड़े', 'कौल', 'राणा', 'मुखर्जी', 'दुबे'
    ]
  },
  // 墨西哥：西班牙文 (包含 Accents)
  MX: {
    firstNames: [
      'José', 'Luis', 'Juan', 'Carlos', 'Francisco', 'Jesús', 'Antonio', 'Miguel', 'Pedro', 'Alejandro',
      'María', 'Guadalupe', 'Juana', 'Margarita', 'Verónica', 'Elizabeth', 'Alejandra', 'Leticia', 'Rosa', 'Adriana',
      'Santiago', 'Mateo', 'Sebastián', 'Leonardo', 'Matías', 'Emiliano', 'Diego', 'Daniel', 'Gael', 'Alexander',
      'Sofía', 'Valentina', 'Regina', 'María José', 'Ximena', 'Camila', 'María Fernanda', 'Victoria', 'Renata', 'Natalia',
      'Manuel', 'Jorge', 'Ricardo', 'Eduardo', 'Roberto', 'Fernando', 'Javier', 'Raúl', 'David', 'Mario',
      'Gabriela', 'Patricia', 'Martha', 'Yolanda', 'Teresa', 'Sandra', 'Luz', 'Ana', 'Laura', 'Diana'
    ],
    lastNames: [
      'Hernández', 'García', 'Martínez', 'López', 'González', 'Pérez', 'Rodríguez', 'Sánchez', 'Ramírez', 'Cruz',
      'Flores', 'Gómez', 'Morales', 'Vázquez', 'Jiménez', 'Reyes', 'Díaz', 'Torres', 'Gutiérrez', 'Ruiz',
      'Mendoza', 'Aguilar', 'Ortiz', 'Moreno', 'Castillo', 'Romero', 'Álvarez', 'Méndez', 'Chávez', 'Rivera',
      'Juárez', 'Ramos', 'Domínguez', 'Herrera', 'Medina', 'Castro', 'Vargas', 'Guzmán', 'Velázquez', 'Rojas',
      'Contreras', 'Salazar', 'Luna', 'De La Cruz', 'Guerrero', 'Estrada', 'Bautista', 'Cortés', 'Soto', 'Alvarado'
    ]
  },
  // 荷兰：荷兰文
  NL: {
    firstNames: [
      'Jan', 'Johannes', 'Cornelis', 'Hendrik', 'Willem', 'Pieter', 'Gerrit', 'Jacob', 'Hans', 'Peter',
      'Maria', 'Johanna', 'Anna', 'Cornelia', 'Wilhelmina', 'Hendrika', 'Adriana', 'Elisabeth', 'Catharina', 'Grietje',
      'Noah', 'Sem', 'Liam', 'Lucas', 'Daan', 'Finn', 'Levi', 'Luuk', 'Mees', 'James',
      'Emma', 'Mila', 'Sophie', 'Zoë', 'Julia', 'Tess', 'Sara', 'Anna', 'Evi', 'Saar',
      'Dennis', 'Mark', 'Patrick', 'Marcel', 'Michael', 'Robert', 'Martijn', 'Richard', 'Jeroen', 'Ronald',
      'Sanne', 'Linda', 'Esther', 'Monique', 'Wendy', 'Sandra', 'Danielle', 'Chantal', 'Kim', 'Saskia'
    ],
    lastNames: [
      'De Jong', 'Jansen', 'De Vries', 'Van den Berg', 'Van Dijk', 'Bakker', 'Janssen', 'Visser', 'Smit', 'Meijer',
      'De Boer', 'Mulder', 'De Groot', 'Bos', 'Vos', 'Peters', 'Hendriks', 'Van Leeuwen', 'Dekker', 'Brouwer',
      'De Wit', 'Dijkstra', 'Smits', 'De Graaf', 'Van der Meer', 'Van der Linden', 'Kok', 'Jacobs', 'De Haan', 'Vermeulen',
      'Van Vliet', 'Van der Heijden', 'Van de Ven', 'Hoekstra', 'Maas', 'Verhoeven', 'Koster', 'Van Dam', 'Van der Wal', 'Prins',
      'Blom', 'Huisman', 'Peeters', 'De Bruin', 'Kuipers', 'Van Wijk', 'Schouten', 'Van Doorn', 'Veenstra', 'Postma'
    ]
  },
  // 瑞典：瑞典文 (包含 å, ä, ö)
  SE: {
    firstNames: [
      'Lars', 'Mikael', 'Anders', 'Johan', 'Erik', 'Per', 'Karl', 'Peter', 'Jan', 'Thomas',
      'Anna', 'Eva', 'Maria', 'Karin', 'Sara', 'Kristina', 'Lena', 'Emma', 'Kerstin', 'Marie',
      'William', 'Liam', 'Noah', 'Lucas', 'Oliver', 'Oscar', 'Elias', 'Hugo', 'Adam', 'Alexander',
      'Alice', 'Maja', 'Lilly', 'Ella', 'Wilma', 'Saga', 'Olivia', 'Astrid', 'Alma', 'Elsa',
      'Fredrik', 'Hans', 'Bengt', 'Gunnar', 'Sven', 'Bo', 'Nils', 'Lennart', 'Olof', 'Gustav',
      'Malin', 'Jenny', 'Annika', 'Monica', 'Linda', 'Susanne', 'Elin', 'Hanna', 'Ingrid', 'Sofia'
    ],
    lastNames: [
      'Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson', 'Persson', 'Svensson', 'Gustafsson',
      'Pettersson', 'Jonsson', 'Jansson', 'Hansson', 'Bengtsson', 'Jönsson', 'Lindberg', 'Jakobsson', 'Magnusson', 'Olofsson',
      'Lindström', 'Lindqvist', 'Lindgren', 'Axelsson', 'Berg', 'Bergström', 'Lundberg', 'Lind', 'Lundgren', 'Lundqvist',
      'Mattsson', 'Berglund', 'Fredriksson', 'Sandberg', 'Henriksson', 'Forsberg', 'Sjöberg', 'Wallin', 'Engström', 'Eklund',
      'Danielsson', 'Lundin', 'Håkansson', 'Gunnarsson', 'Bergman', 'Samuelsson', 'Fransson', 'Holm', 'Nyström', 'Holmberg'
    ]
  },
  // 瑞士：德文/法文 (混合)
  CH: {
    firstNames: [
      'Hans', 'Daniel', 'Thomas', 'Peter', 'Christian', 'Andreas', 'Markus', 'Michael', 'Martin', 'Urs',
      'Maria', 'Anna', 'Ursula', 'Ruth', 'Elisabeth', 'Sandra', 'Monika', 'Claudia', 'Verena', 'Nicole',
      'Noah', 'Liam', 'Matteo', 'Leon', 'Luca', 'Elias', 'Julian', 'David', 'Levin', 'Samuel',
      'Mia', 'Emma', 'Sofia', 'Mila', 'Emilia', 'Lina', 'Elena', 'Lea', 'Lara', 'Laura',
      'Reto', 'Bruno', 'Roland', 'Stefan', 'Beat', 'Werner', 'René', 'Marcel', 'Patrick', 'Walter',
      'Barbara', 'Silvia', 'Andrea', 'Brigitte', 'Daniela', 'Karin', 'Marianne', 'Rita', 'Margrit', 'Christine'
    ],
    lastNames: [
      'Müller', 'Meier', 'Schmid', 'Keller', 'Weber', 'Huber', 'Schneider', 'Meyer', 'Steiner', 'Fischer',
      'Gerber', 'Brunner', 'Baumann', 'Frei', 'Zimmermann', 'Moser', 'Widmer', 'Wyss', 'Graf', 'Roth',
      'Sutter', 'Baumgartner', 'Tobler', 'Bieri', 'Bachmann', 'Kaufmann', 'Kälin', 'Studer', 'Lehmann', 'Hofer',
      'Marti', 'Lüthi', 'Christen', 'Egger', 'Pfister', 'Hofstetter', 'Fuchs', 'Bühler', 'Arnold', 'Langenegger',
      'Vogel', 'Hug', 'Stadler', 'Hauser', 'Tanner', 'Zürcher', 'Flückiger', 'Bucher', 'Roos', 'Hess'
    ]
  },
  // 波兰：波兰文 (包含 ł, ń, ś, ź, ż 等)
  PL: {
    firstNames: [
      'Jan', 'Piotr', 'Krzysztof', 'Tomasz', 'Paweł', 'Michał', 'Andrzej', 'Marcin', 'Stanisław', 'Adam',
      'Anna', 'Maria', 'Katarzyna', 'Małgorzata', 'Agnieszka', 'Krystyna', 'Barbara', 'Ewa', 'Elżbieta', 'Zofia',
      'Antoni', 'Jakub', 'Szymon', 'Aleksander', 'Franciszek', 'Filip', 'Mikołaj', 'Wojciech', 'Kacper', 'Ignacy',
      'Zuzanna', 'Julia', 'Maja', 'Hanna', 'Lena', 'Alicja', 'Oliwia', 'Laura', 'Pola', 'Amelia',
      'Marek', 'Grzegorz', 'Józef', 'Łukasz', 'Zbigniew', 'Jerzy', 'Tadeusz', 'Dariusz', 'Jacek', 'Mariusz',
      'Magdalena', 'Joanna', 'Aleksandra', 'Monika', 'Teresa', 'Danuta', 'Natalia', 'Karolina', 'Marta', 'Beata'
    ],
    lastNames: [
      'Nowak', 'Kowalski', 'Wiśniewski', 'Wójcik', 'Kowalczyk', 'Kamiński', 'Lewandowski', 'Zieliński', 'Szymański', 'Woźniak',
      'Dąbrowski', 'Kozłowski', 'Jankowski', 'Mazur', 'Wojciechowski', 'Kwiatkowski', 'Krawczyk', 'Kaczmarek', 'Piotrowski', 'Grabowski',
      'Zając', 'Pawłowski', 'Michalski', 'Król', 'Wieczorek', 'Jabłoński', 'Wróbel', 'Nowakowski', 'Majewski', 'Olszewski',
      'Stępień', 'Malinowski', 'Jaworski', 'Adamczyk', 'Dudek', 'Nowicki', 'Pawlak', 'Górski', 'Witkowski', 'Sikora',
      'Walczak', 'Rutkowski', 'Baran', 'Michalak', 'Szewczyk', 'Ostrowski', 'Tomaszewski', 'Pietrzak', 'Zalewski', 'Wróblewski'
    ]
  },
  // 土耳其：土耳其文 (包含 ş, ı, ğ, ç, ö, ü)
  TR: {
    firstNames: [
      'Mehmet', 'Mustafa', 'Ahmet', 'Ali', 'Hüseyin', 'Hasan', 'İbrahim', 'İsmail', 'Osman', 'Yusuf',
      'Fatma', 'Ayşe', 'Emine', 'Hatice', 'Zeynep', 'Elif', 'Meryem', 'Şerife', 'Zehra', 'Sultan',
      'Alparslan', 'Yusuf', 'Eymen', 'Aras', 'Ömer', 'Miraç', 'Kerem', 'Defne', 'Zeynep', 'Asel',
      'Murat', 'Ömer', 'Ramazan', 'Halil', 'Süleyman', 'Abdullah', 'Mahmut', 'Salih', 'Recep', 'Sinan',
      'Hanife', 'Merve', 'Havva', 'Esra', 'Fadime', 'Özlem', 'Hacer', 'Yasemin', 'Hülya', 'Dilek',
      'Fatih', 'Kadir', 'Emre', 'Adem', 'Kemal', 'Yaşar', 'Bekir', 'Orhan', 'Metin', 'Burak'
    ],
    lastNames: [
      'Yılmaz', 'Kaya', 'Demir', 'Çelik', 'Şahin', 'Yıldız', 'Yıldırım', 'Öztürk', 'Aydın', 'Özdemir',
      'Arslan', 'Doğan', 'Kılıç', 'Aslan', 'Çetin', 'Kara', 'Koç', 'Kurt', 'Özkan', 'Şimşek',
      'Polat', 'Özçelik', 'Korkmaz', 'Can', 'Erdoğan', 'Yavuz', 'Şen', 'Aktaş', 'Güler', 'Karahan',
      'Acar', 'Güneş', 'Bozkurt', 'Bulut', 'Keskin', 'Ünal', 'Avcı', 'Özer', 'Işık', 'Kaplan',
      'Turan', 'Tekin', 'Taş', 'Köse', 'Yüksel', 'Ateş', 'Aksoy', 'Çakır', 'Coşkun', 'Sarı'
    ]
  },
  // 泰国：泰文 (Thai Script)
  TH: {
    firstNames: [
      'สมชาย', 'สมศักดิ์', 'สมพงษ์', 'สุรชัย', 'สุวัฒน์', 'ประเสริฐ', 'วิชัย', 'ปรีชา', 'อำนาจ', 'ณรงค์',
      'สมหญิง', 'มะลิ', 'รัตนา', 'นิภา', 'สุนิสา', 'สุภาพร', 'กรรณิการ์', 'ศิริพร', 'อุไรวรรณ', 'จินตนา',
      'อาทิตย์', 'ณัฐพงศ์', 'กิตติศักดิ์', 'ธีรวัฒน์', 'วีรวัฒน์', 'จิรายุส', 'ธนวัฒน์', 'วรวิทย์', 'อนุวัฒน์', 'ชาคริต',
      'พิมพ์ชนก', 'ชุติมา', 'วรัฐฐา', 'พรทิพย์', 'กัญญา', 'ธิดารัตน์', 'เบญจพร', 'กาญจนา', 'วิไล', 'พัชรี',
      'ธงชัย', 'มนัส', 'สมบัติ', 'สมาน', 'วันชัย', 'ไพศาล', 'เฉลิม', 'ชัยยุทธ', 'สุชาติ', 'บุญมี',
      'นงนุช', 'ดารุณี', 'สุรี', 'มยุรี', 'อรทัย', 'สุดา', 'มาลินี', 'สมจิตต์', 'บัวผัน', 'ฉันทนา'
    ],
    lastNames: [
      'แซ่ลี้', 'แซ่ตัน', 'แซ่หวัง', 'แซ่เงิน', 'แซ่ลิ้ม', 'แซ่เตีย', 'แซ่หลี', 'แซ่เฉิน', 'แซ่โค้ว', 'แซ่ตั้ง',
      'สุขเจริญ', 'ศรีทอง', 'วงษ์สุวรรณ', 'เจริญผล', 'คำแก้ว', 'ทองดี', 'ชัยพร', 'ศิริวัฒน์', 'อินทรชัย', 'แก้วมณี',
      'สุวรรณรัตน์', 'พรหมมาศ', 'ศรีสุข', 'รัตนพร', 'จันทร', 'มณีรัตน์', 'บุญชู', 'ชัยยศ', 'วงษา', 'สมบัติ',
      'พรประสิทธิ์', 'กลิ่นหอม', 'บุญมี', 'ศรีสวัสดิ์', 'พานิช', 'นวรัตน์', 'พัฒนา', 'คงสวัสดิ์', 'ตันตระกูล', 'วัฒนพานิช',
      'จิราพร', 'แสงทอง', 'เกศรา', 'เพชรศรี', 'บุญมา', 'ศรีกราม', 'ทองแท้', 'สุขสวัสดิ์', 'เจริญสุข', 'มีชัย'
    ]
  },
  // 马来西亚：马来文/英文 (马来西亚官方文字为Rumi Latin)
  MY: {
    firstNames: [
      'Muhammad', 'Abdul', 'Ahmad', 'Mohd', 'Adam', 'Amir', 'Harith', 'Irfan', 'Danish', 'Rayyan',
      'Nur', 'Siti', 'Nurul', 'Aishah', 'Fatimah', 'Zahra', 'Ain', 'Putri', 'Nor', 'Farah',
      'Wei', 'Jun', 'Jian', 'Ming', 'Seng', 'Keat', 'Hong', 'Chee', 'Wai', 'Kok',
      'Hui', 'Yee', 'Ling', 'Jing', 'Min', 'Yan', 'Pei', 'Siew', 'Xin', 'Li',
      'Arif', 'Haziq', 'Fikri', 'Syahmi', 'Aiman', 'Khairul', 'Luqman', 'Hakim', 'Syafiq', 'Zul',
      'Nadia', 'Atikah', 'Najwa', 'Amirah', 'Nabilah', 'Syafiqah', 'Fatin', 'Izzati', 'Husna', 'Yasmin'
    ],
    lastNames: [
      'Bin Abdullah', 'Bin Ahmad', 'Bin Ali', 'Bin Ibrahim', 'Bin Ismail', 'Bin Mohamed', 'Bin Yusof', 'Bin Rahman', 'Bin Hassan', 'Bin Hussein',
      'Tan', 'Lim', 'Lee', 'Wong', 'Ng', 'Chong', 'Liew', 'Teoh', 'Ong', 'Chan',
      'Subramaniam', 'Ramasamy', 'Rao', 'Nair', 'Krishnan', 'Raj', 'Menon', 'Pillay', 'Singh', 'Kaur',
      'Goh', 'Low', 'Toh', 'Khoo', 'Chin', 'Sim', 'Yeoh', 'Chua', 'Teo', 'Kee',
      'Bin Othman', 'Bin Jaafar', 'Bin Zakaria', 'Bin Aziz', 'Bin Kassim', 'Bin Daud', 'Bin Sulaiman', 'Bin Baba', 'Bin Salleh', 'Bin Omar'
    ]
  },
  // 印度尼西亚：印尼文 (Latin)
  ID: {
    firstNames: [
      'Budi', 'Agus', 'Dwi', 'Eko', 'Muhammad', 'Nur', 'Sri', 'Siti', 'Tri', 'Dian',
      'Putra', 'Putri', 'Rizky', 'Bayu', 'Adi', 'Wahyu', 'Rina', 'Indah', 'Dewi', 'Ayu',
      'Slamet', 'Santoso', 'Joko', 'Hendra', 'Yusuf', 'Bambang', 'Ari', 'Fajar', 'Aditya', 'Iwan',
      'Ratna', 'Wulan', 'Lestari', 'Ningsih', 'Yuni', 'Sari', 'Fitri', 'Rini', 'Maya', 'Santi',
      'Andi', 'Deny', 'Rudi', 'Herman', 'Yanto', 'Gunawan', 'Tono', 'Arif', 'Imam', 'Ferry',
      'Lia', 'Desi', 'Vina', 'Eka', 'Novita', 'Mega', 'Tia', 'Gita', 'Nina', 'Murni'
    ],
    lastNames: [
      'Santoso', 'Susanto', 'Setiawan', 'Prasetyo', 'Nugroho', 'Saputra', 'Hidayat', 'Wibowo', 'Wijaya', 'Kusuma',
      'Purnomo', 'Yulianto', 'Suharto', 'Mulyono', 'Wahyudi', 'Kurniawan', 'Utomo', 'Siregar', 'Simanjuntak', 'Pasaribu',
      'Nasution', 'Lubis', 'Harahap', 'Ginting', 'Tarigan', 'Sembiring', 'Sinaga', 'Sitompul', 'Nainggolan', 'Sihombing',
      'Widodo', 'Basuki', 'Sutrisno', 'Hartono', 'Supriyanto', 'Rahardjo', 'Sulistyo', 'Hermawan', 'Cahyono', 'Firmansyah',
      'Maulana', 'Ramadhan', 'Fauzi', 'Permana', 'Hakim', 'Ardiansyah', 'Budiman', 'Gunawan', 'Sanjaya', 'Putra'
    ]
  },
  // 菲律宾：英文/菲律宾文 (Latin)
  PH: {
    firstNames: [
      'José', 'Maria', 'Juan', 'Mark', 'Michael', 'Angelo', 'Christian', 'John', 'Joshua', 'Jayson',
      'Mary', 'Jennifer', 'Michelle', 'Christine', 'Grace', 'Anna', 'Joy', 'Marie', 'Rose', 'Angel',
      'Nathaniel', 'James', 'Gabriel', 'Daniel', 'Francis', 'Patrick', 'Joseph', 'Ryan', 'Adrian', 'Kevin',
      'Princess', 'Jasmine', 'Kimberly', 'Sarah', 'Nicole', 'Andrea', 'Erica', 'Karen', 'Rhea', 'Melissa',
      'Rogelio', 'Eduardo', 'Marlon', 'Romeo', 'Ramon', 'Renato', 'Danilo', 'Roberto', 'Reynaldo', 'Edwin',
      'Lorna', 'Marites', 'Teresita', 'Imelda', 'Elena', 'Susan', 'Elizabeth', 'Glenda', 'Rowena', 'Maricel'
    ],
    lastNames: [
      'Santos', 'Reyes', 'Cruz', 'Bautista', 'Ocampo', 'Garcia', 'Mendoza', 'Torres', 'Tomas', 'Andrada',
      'Castillo', 'Flores', 'Villanueva', 'Ramos', 'Castro', 'Rivera', 'Aquino', 'Navarro', 'Salazar', 'Mercado',
      'Dela Cruz', 'Fernandez', 'Lopez', 'Gonzales', 'Rodriguez', 'Perez', 'Sanchez', 'Martinez', 'Hernandez', 'Sarmiento',
      'Delos Santos', 'Diaz', 'Domingo', 'Valdez', 'Santiago', 'Ferrer', 'Del Rosario', 'Jimenez', 'Gomez', 'Morales',
      'Francisco', 'De Leon', 'Tolentino', 'Marquez', 'Aguilar', 'Soriano', 'Manalo', 'Pascual', 'Lim', 'Tan'
    ]
  },
  // 越南：越南文 (Quốc Ngữ，包含声调)
  VN: {
    firstNames: [
      'Hùng', 'Tuấn', 'Dũng', 'Nam', 'Minh', 'Hiếu', 'Huy', 'Hoàng', 'Long', 'Duy',
      'Trang', 'Huyền', 'Thảo', 'Linh', 'Mai', 'Hương', 'Thu', 'Lan', 'Phương', 'Hà',
      'Quang', 'Đức', 'Thành', 'Sơn', 'Trung', 'Cường', 'Thắng', 'Đạt', 'Kiên', 'Khánh',
      'Vy', 'Ngọc', 'Quỳnh', 'Nhi', 'Yến', 'Trâm', 'Anh', 'Châu', 'Tuyết', 'Diệp',
      'Tài', 'Lộc', 'Phúc', 'Thịnh', 'Bảo', 'Lâm', 'Vinh', 'Khoa', 'Nhật', 'An',
      'Hằng', 'Nhung', 'Thủy', 'Hồng', 'Gấm', 'Oanh', 'Kim', 'Ly', 'My', 'Tâm'
    ],
    lastNames: [
      'Nguyễn', 'Trần', 'Lê', 'Phạm', 'Hoàng', 'Huỳnh', 'Phan', 'Vũ', 'Võ', 'Đặng',
      'Bùi', 'Đỗ', 'Hồ', 'Ngô', 'Dương', 'Lý', 'Đoàn', 'Trương', 'Đinh', 'Lâm',
      'Mai', 'Trịnh', 'Hà', 'Đào', 'Cao', 'Châu', 'Lương', 'Lạc', 'Diệp', 'Vương',
      'Phùng', 'Tô', 'Vương', 'Tạ', 'Biện', 'Thân', 'Tống', 'Mạc', 'Đàm', 'Chu',
      'Khưu', 'Phí', 'Liêu', 'Tiêu', 'Bạch', 'Cung', 'Nghiêm', 'Thạch', 'La', 'Ôn'
    ]
  }
};
