// 国家手机号配置数据

export interface PhoneRule {
  pattern: string; // 手机号模式，X表示随机数字
  prefixes?: string[]; // 可选的号段前缀
  length?: number; // 号码长度（不含区号）
}

export interface CountryData {
  id: string;
  name: string;
  code: string; // 国际区号
  rule: PhoneRule;
}

// 主要国家的详细手机号规则
export const countries: CountryData[] = [
  { id: 'AF', name: '阿富汗', code: '+93', rule: { pattern: 'XXX XXX XXX', prefixes: ['70', '72', '74', '75', '76', '77', '78', '79'] } },
  { id: 'AL', name: '阿尔巴尼亚', code: '+355', rule: { pattern: 'XX XXX XXXX', prefixes: ['66', '67', '68', '69'] } },
  { id: 'DZ', name: '阿尔及利亚', code: '+213', rule: { pattern: 'XXX XX XX XX', prefixes: ['5', '6', '7'] } },
  { id: 'AS', name: '美属萨摩亚', code: '+1', rule: { pattern: '684-XXX-XXXX' } },
  { id: 'AD', name: '安道尔', code: '+376', rule: { pattern: 'XXX XXX', prefixes: ['3', '4', '6'] } },
  { id: 'AO', name: '安哥拉', code: '+244', rule: { pattern: 'XXX XXX XXX', prefixes: ['91', '92', '93', '94'] } },
  { id: 'AI', name: '安圭拉', code: '+1', rule: { pattern: '264-XXX-XXXX' } },
  { id: 'AG', name: '安提瓜岛', code: '+1', rule: { pattern: '268-XXX-XXXX' } },
  { id: 'AR', name: '阿根廷', code: '+54', rule: { pattern: 'XX XXXX-XXXX', prefixes: ['11', '91', '92', '93', '94'] } },
  { id: 'AM', name: '亚美尼亚', code: '+374', rule: { pattern: 'XX XXX XXX', prefixes: ['43', '44', '55', '77', '91', '93', '94', '95', '96', '98', '99'] } },
  { id: 'AW', name: '阿鲁巴', code: '+297', rule: { pattern: 'XXX XXXX', prefixes: ['5', '6', '7', '9'] } },
  { id: 'AU', name: '澳大利亚', code: '+61', rule: { pattern: 'XXX XXX XXX', prefixes: ['4'] } },
  { id: 'AT', name: '奥地利', code: '+43', rule: { pattern: 'XXX XXXXXXX', prefixes: ['650', '660', '664', '676', '680', '688', '699'] } },
  { id: 'AZ', name: '阿塞拜疆', code: '+994', rule: { pattern: 'XX XXX XX XX', prefixes: ['40', '50', '51', '55', '60', '70', '77'] } },
  { id: 'BH', name: '巴林', code: '+973', rule: { pattern: 'XXXX XXXX', prefixes: ['3', '6'] } },
  { id: 'BD', name: '孟加拉国', code: '+880', rule: { pattern: 'XXXX-XXXXXX', prefixes: ['13', '14', '15', '16', '17', '18', '19'] } },
  { id: 'BB', name: '巴巴多斯岛', code: '+1', rule: { pattern: '246-XXX-XXXX' } },
  { id: 'BY', name: '白俄罗斯', code: '+375', rule: { pattern: 'XX XXX-XX-XX', prefixes: ['25', '29', '33', '44'] } },
  { id: 'BE', name: '比利时', code: '+32', rule: { pattern: 'XXX XX XX XX', prefixes: ['46', '47', '48', '49'] } },
  { id: 'BZ', name: '伯利兹', code: '+501', rule: { pattern: 'XXX-XXXX', prefixes: ['6'] } },
  { id: 'BJ', name: '贝宁', code: '+229', rule: { pattern: 'XX XX XX XX', prefixes: ['40', '41', '42', '43', '44', '45', '46', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'] } },
  { id: 'BM', name: '百慕大', code: '+1', rule: { pattern: '441-XXX-XXXX' } },
  { id: 'BT', name: '不丹', code: '+975', rule: { pattern: 'XX XX XX XX', prefixes: ['17'] } },
  { id: 'BO', name: '玻利维亚', code: '+591', rule: { pattern: 'X XXX XXXX', prefixes: ['6', '7'] } },
  { id: 'BQ', name: '博内尔，圣尤斯特歇斯和沙巴', code: '+599', rule: { pattern: 'XXX XXXX', prefixes: ['7'] } },
  { id: 'BA', name: '波斯尼亚和黑塞哥维那', code: '+387', rule: { pattern: 'XX XXX XXX', prefixes: ['60', '61', '62', '63', '64', '65', '66'] } },
  { id: 'BW', name: '博茨瓦纳', code: '+267', rule: { pattern: 'XX XXX XXX', prefixes: ['71', '72', '73', '74', '75', '76'] } },
  { id: 'BR', name: '巴西', code: '+55', rule: { pattern: 'XX 9XXXX-XXXX', prefixes: ['11', '21', '31', '41', '51', '61', '71', '81', '91'] } },
  { id: 'IO', name: '英属印度洋领地', code: '+246', rule: { pattern: 'XXX XXXX' } },
  { id: 'VG', name: '英属维尔京群岛', code: '+1', rule: { pattern: '284-XXX-XXXX' } },
  { id: 'BN', name: '文莱', code: '+673', rule: { pattern: 'XXX XXXX', prefixes: ['7', '8'] } },
  { id: 'BG', name: '保加利亚', code: '+359', rule: { pattern: 'XX XXX XXXX', prefixes: ['87', '88', '89', '98', '99'] } },
  { id: 'BF', name: '布基纳法索', code: '+226', rule: { pattern: 'XX XX XX XX', prefixes: ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79'] } },
  { id: 'BI', name: '布隆迪', code: '+257', rule: { pattern: 'XX XX XX XX', prefixes: ['29', '61', '68', '69', '71', '72', '75', '76', '77', '78', '79'] } },
  { id: 'KH', name: '柬埔寨', code: '+855', rule: { pattern: 'XX XXX XXX', prefixes: ['10', '11', '12', '14', '15', '16', '17', '61', '69', '70', '71', '76', '77', '78', '79', '81', '85', '86', '87', '88', '89', '90', '92', '93', '95', '96', '97', '98', '99'] } },
  { id: 'CM', name: '喀麦隆', code: '+237', rule: { pattern: 'X XX XX XX XX', prefixes: ['6'] } },
  { id: 'CA', name: '加拿大', code: '+1', rule: { pattern: 'XXX-XXX-XXXX', prefixes: ['204', '226', '236', '249', '250', '289', '306', '343', '365', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '705', '709', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905'] } },
  { id: 'CV', name: '佛得角', code: '+238', rule: { pattern: 'XXX XX XX', prefixes: ['5', '9'] } },
  { id: 'KY', name: '开曼群岛', code: '+1', rule: { pattern: '345-XXX-XXXX' } },
  { id: 'CI', name: '科特迪瓦', code: '+225', rule: { pattern: 'XX XX XX XX XX', prefixes: ['01', '02', '03', '04', '05', '06', '07', '08', '09'] } },
  { id: 'CF', name: '中非共和国', code: '+236', rule: { pattern: 'XX XX XX XX', prefixes: ['70', '72', '75', '77'] } },
  { id: 'TD', name: '乍得', code: '+235', rule: { pattern: 'XX XX XX XX', prefixes: ['60', '61', '62', '63', '66', '67', '68', '69', '77', '90', '91', '92', '93', '94', '95', '96', '98', '99'] } },
  { id: 'CL', name: '智利', code: '+56', rule: { pattern: 'X XXXX XXXX', prefixes: ['2', '9'] } },
  { id: 'CN', name: '中国', code: '+86', rule: { pattern: 'XXX XXXX XXXX', prefixes: ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '145', '147', '149', '150', '151', '152', '153', '155', '156', '157', '158', '159', '162', '165', '166', '167', '170', '171', '172', '173', '175', '176', '177', '178', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191', '193', '195', '196', '197', '198', '199'] } },
  { id: 'CO', name: '哥伦比亚', code: '+57', rule: { pattern: 'XXX XXX XXXX', prefixes: ['300', '301', '302', '303', '304', '305', '310', '311', '312', '313', '314', '315', '316', '317', '318', '319', '320', '321', '322', '323', '350', '351'] } },
  { id: 'KM', name: '科摩罗', code: '+269', rule: { pattern: 'XXX XX XX', prefixes: ['3', '6', '7'] } },
  { id: 'CK', name: '库克群岛', code: '+682', rule: { pattern: 'XX XXX', prefixes: ['5', '7'] } },
  { id: 'CR', name: '哥斯达黎加', code: '+506', rule: { pattern: 'XXXX XXXX', prefixes: ['5', '6', '7', '8'] } },
  { id: 'HR', name: '克罗地亚', code: '+385', rule: { pattern: 'XX XXX XXXX', prefixes: ['91', '92', '95', '97', '98', '99'] } },
  { id: 'CU', name: '古巴', code: '+53', rule: { pattern: 'X XXX XXXX', prefixes: ['5'] } },
  { id: 'CW', name: '库拉索', code: '+599', rule: { pattern: 'X XXX XXXX', prefixes: ['9'] } },
  { id: 'CY', name: '塞浦路斯', code: '+357', rule: { pattern: 'XX XXX XXX', prefixes: ['95', '96', '97', '99'] } },
  { id: 'CZ', name: '捷克', code: '+420', rule: { pattern: 'XXX XXX XXX', prefixes: ['601', '602', '603', '604', '605', '606', '607', '608', '702', '703', '704', '705', '720', '721', '722', '723', '724', '725', '730', '731', '732', '733', '734', '735', '736', '737', '738', '739', '770', '771', '772', '773', '774', '775', '776', '777', '778', '779'] } },
  { id: 'CD', name: '刚果民主共和国', code: '+243', rule: { pattern: 'XXX XXX XXX', prefixes: ['81', '82', '83', '84', '85', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'] } },
  { id: 'DK', name: '丹麦', code: '+45', rule: { pattern: 'XX XX XX XX', prefixes: ['2', '3', '4', '5', '6', '7', '8', '9'] } },
  { id: 'DJ', name: '吉布提', code: '+253', rule: { pattern: 'XX XX XX XX', prefixes: ['77'] } },
  { id: 'DM', name: '多米尼克', code: '+1', rule: { pattern: '767-XXX-XXXX' } },
  { id: 'DO', name: '多米尼加共和国', code: '+1', rule: { pattern: 'XXX-XXX-XXXX', prefixes: ['809', '829', '849'] } },
  { id: 'EC', name: '厄瓜多尔', code: '+593', rule: { pattern: 'XX XXX XXXX', prefixes: ['96', '97', '98', '99'] } },
  { id: 'EG', name: '埃及', code: '+20', rule: { pattern: 'XXX XXX XXXX', prefixes: ['10', '11', '12', '15'] } },
  { id: 'SV', name: '萨尔瓦多', code: '+503', rule: { pattern: 'XXXX XXXX', prefixes: ['6', '7'] } },
  { id: 'GQ', name: '赤道几内亚', code: '+240', rule: { pattern: 'XXX XXX XXX', prefixes: ['222', '551', '555'] } },
  { id: 'ER', name: '厄立特里亚', code: '+291', rule: { pattern: 'X XXX XXX', prefixes: ['7'] } },
  { id: 'EE', name: '爱沙尼亚', code: '+372', rule: { pattern: 'XXXX XXXX', prefixes: ['5'] } },
  { id: 'ET', name: '埃塞俄比亚', code: '+251', rule: { pattern: 'XX XXX XXXX', prefixes: ['91', '92', '93', '94'] } },
  { id: 'FK', name: '福克兰群岛', code: '+500', rule: { pattern: 'XXXXX' } },
  { id: 'FO', name: '法罗群岛', code: '+298', rule: { pattern: 'XXX XXX', prefixes: ['2', '3', '4', '5', '7', '8', '9'] } },
  { id: 'FM', name: '密克罗尼西亚联邦', code: '+691', rule: { pattern: 'XXX XXXX' } },
  { id: 'FJ', name: '斐济', code: '+679', rule: { pattern: 'XXX XXXX', prefixes: ['7', '8', '9'] } },
  { id: 'FI', name: '芬兰', code: '+358', rule: { pattern: 'XX XXX XXXX', prefixes: ['40', '41', '42', '43', '44', '45', '46', '50'] } },
  { id: 'FR', name: '法国', code: '+33', rule: { pattern: 'X XX XX XX XX', prefixes: ['6', '7'] } },
  { id: 'GF', name: '法属圭亚那', code: '+594', rule: { pattern: 'XXX XX XX XX', prefixes: ['694'] } },
  { id: 'PF', name: '法属玻利尼西亚', code: '+689', rule: { pattern: 'XX XX XX XX', prefixes: ['87', '89'] } },
  { id: 'GA', name: '加蓬', code: '+241', rule: { pattern: 'XX XX XX XX', prefixes: ['02', '03', '04', '05', '06', '07'] } },
  { id: 'GE', name: '格鲁吉亚', code: '+995', rule: { pattern: 'XXX XX XX XX', prefixes: ['511', '514', '551', '555', '557', '558', '559', '568', '571', '574', '577', '579', '591', '592', '593', '595', '596', '597', '598', '599'] } },
  { id: 'DE', name: '德国', code: '+49', rule: { pattern: 'XXX XXXXXXXX', prefixes: ['151', '152', '157', '159', '160', '162', '163', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179'] } },
  { id: 'GH', name: '加纳', code: '+233', rule: { pattern: 'XX XXX XXXX', prefixes: ['20', '23', '24', '26', '27', '28', '50', '54', '55', '56', '57', '59'] } },
  { id: 'GI', name: '直布罗陀', code: '+350', rule: { pattern: 'XXXX XXXX', prefixes: ['5', '6'] } },
  { id: 'GR', name: '希腊', code: '+30', rule: { pattern: 'XXX XXX XXXX', prefixes: ['690', '691', '693', '694', '695', '696', '697', '698', '699'] } },
  { id: 'GL', name: '格陵兰', code: '+299', rule: { pattern: 'XX XX XX', prefixes: ['2', '4', '5'] } },
  { id: 'GD', name: '格林纳达', code: '+1', rule: { pattern: '473-XXX-XXXX' } },
  { id: 'GP', name: '瓜德罗普岛', code: '+590', rule: { pattern: 'XXX XX XX XX', prefixes: ['690'] } },
  { id: 'GU', name: '关岛', code: '+1', rule: { pattern: '671-XXX-XXXX' } },
  { id: 'GT', name: '危地马拉', code: '+502', rule: { pattern: 'X XXX XXXX', prefixes: ['3', '4', '5'] } },
  { id: 'GG', name: '根西岛', code: '+44', rule: { pattern: 'XXXX XXXXXX', prefixes: ['1481', '7781', '7839', '7911'] } },
  { id: 'GN', name: '几内亚', code: '+224', rule: { pattern: 'XXX XX XX XX', prefixes: ['610', '611', '612', '620', '621', '622', '623', '624', '625', '626', '627', '628', '629', '630', '631', '632', '633', '654', '655', '656', '657', '658', '659', '660', '661', '662', '663', '664', '665', '666', '667', '668', '669'] } },
  { id: 'GW', name: '几内亚比绍共和国', code: '+245', rule: { pattern: 'XXX XXXX', prefixes: ['5', '6', '7'] } },
  { id: 'GY', name: '圭亚那', code: '+592', rule: { pattern: 'XXX XXXX', prefixes: ['6'] } },
  { id: 'HT', name: '海地', code: '+509', rule: { pattern: 'XX XX XXXX', prefixes: ['28', '29', '31', '32', '33', '34', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49'] } },
  { id: 'HN', name: '洪都拉斯', code: '+504', rule: { pattern: 'XXXX XXXX', prefixes: ['3', '7', '8', '9'] } },
  { id: 'HK', name: '香港', code: '+852', rule: { pattern: 'XXXX XXXX', prefixes: ['5', '6', '9'] } },
  { id: 'HU', name: '匈牙利', code: '+36', rule: { pattern: 'XX XXX XXXX', prefixes: ['20', '30', '31', '50', '70'] } },
  { id: 'IS', name: '冰岛', code: '+354', rule: { pattern: 'XXX XXXX', prefixes: ['6', '7', '8'] } },
  { id: 'IN', name: '印度', code: '+91', rule: { pattern: 'XXXXX XXXXX', prefixes: ['6', '7', '8', '9'] } },
  { id: 'ID', name: '印度尼西亚', code: '+62', rule: { pattern: 'XXX-XXX-XXXX', prefixes: ['811', '812', '813', '814', '815', '816', '817', '818', '819', '821', '822', '823', '851', '852', '853', '855', '856', '857', '858', '859'] } },
  { id: 'IR', name: '伊朗', code: '+98', rule: { pattern: 'XXX XXX XXXX', prefixes: ['901', '902', '903', '905', '910', '911', '912', '913', '914', '915', '916', '917', '918', '919', '920', '921', '922', '930', '933', '935', '936', '937', '938', '939'] } },
  { id: 'IQ', name: '伊拉克', code: '+964', rule: { pattern: 'XXX XXX XXXX', prefixes: ['750', '751', '770', '771', '772', '773', '774', '775', '780', '781', '782', '783', '784', '790', '791'] } },
  { id: 'IE', name: '爱尔兰', code: '+353', rule: { pattern: 'XX XXX XXXX', prefixes: ['82', '83', '84', '85', '86', '87', '88', '89'] } },
  { id: 'IM', name: '马恩岛', code: '+44', rule: { pattern: 'XXXX XXXXXX', prefixes: ['1624', '7524', '7624', '7924'] } },
  { id: 'IL', name: '以色列', code: '+972', rule: { pattern: 'XX-XXX-XXXX', prefixes: ['50', '51', '52', '53', '54', '55', '58'] } },
  { id: 'IT', name: '意大利', code: '+39', rule: { pattern: 'XXX XXX XXXX', prefixes: ['320', '322', '323', '324', '327', '328', '329', '330', '331', '333', '334', '335', '336', '337', '338', '339', '340', '342', '343', '344', '345', '346', '347', '348', '349', '350', '351', '360', '366', '368', '380', '383', '388', '389', '391', '392', '393'] } },
  { id: 'JM', name: '牙买加', code: '+1', rule: { pattern: '876-XXX-XXXX' } },
  { id: 'JP', name: '日本', code: '+81', rule: { pattern: 'XX-XXXX-XXXX', prefixes: ['70', '80', '90'] } },
  { id: 'JE', name: '泽西岛', code: '+44', rule: { pattern: 'XXXX XXXXXX', prefixes: ['1534', '7509', '7700', '7797', '7829', '7937'] } },
  { id: 'JO', name: '约旦', code: '+962', rule: { pattern: 'XX XXX XXXX', prefixes: ['77', '78', '79'] } },
  { id: 'KZ', name: '哈萨克斯坦', code: '+7', rule: { pattern: 'XXX XXX-XX-XX', prefixes: ['700', '701', '702', '705', '707', '708', '747', '771', '775', '776', '777', '778'] } },
  { id: 'KE', name: '肯尼亚', code: '+254', rule: { pattern: 'XXX XXXXXX', prefixes: ['701', '702', '703', '704', '705', '706', '707', '708', '710', '711', '712', '713', '714', '715', '716', '717', '718', '719', '720', '721', '722', '723', '724', '725', '726', '727', '728', '729', '740', '741', '742', '743', '745', '746', '748', '757', '758', '759', '768', '769', '790', '791', '792', '793', '794', '795', '796', '797', '798', '799'] } },
  { id: 'KI', name: '基里巴斯', code: '+686', rule: { pattern: 'XXXX XXXX' } },
  { id: 'XK', name: '科索沃', code: '+383', rule: { pattern: 'XX XXX XXX', prefixes: ['43', '44', '45', '49'] } },
  { id: 'KW', name: '科威特', code: '+965', rule: { pattern: 'XXXX XXXX', prefixes: ['5', '6', '9'] } },
  { id: 'KG', name: '吉尔吉斯斯坦', code: '+996', rule: { pattern: 'XXX XXX XXX', prefixes: ['500', '501', '502', '503', '504', '505', '506', '507', '508', '509', '550', '551', '552', '553', '554', '555', '556', '557', '558', '559', '700', '701', '702', '703', '704', '705', '706', '707', '708', '709', '750', '751', '752', '753', '754', '755', '756', '757', '758', '759', '770', '771', '772', '773', '774', '775', '776', '777', '778', '779'] } },
  { id: 'LA', name: '老挝', code: '+856', rule: { pattern: 'XX XX XXX XXX', prefixes: ['20', '30'] } },
  { id: 'LV', name: '拉脱维亚', code: '+371', rule: { pattern: 'XX XXX XXX', prefixes: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'] } },
  { id: 'LB', name: '黎巴嫩', code: '+961', rule: { pattern: 'XX XXX XXX', prefixes: ['3', '70', '71', '76', '78', '79', '81'] } },
  { id: 'LS', name: '莱索托', code: '+266', rule: { pattern: 'X XXX XXXX', prefixes: ['5', '6'] } },
  { id: 'LR', name: '利比里亚', code: '+231', rule: { pattern: 'XX XXX XXXX', prefixes: ['4', '5', '6', '7'] } },
  { id: 'LY', name: '利比亞', code: '+218', rule: { pattern: 'XX-XXX-XXXX', prefixes: ['91', '92', '93', '94', '95'] } },
  { id: 'LI', name: '列支敦士登', code: '+423', rule: { pattern: 'XXX XX XX', prefixes: ['6', '7'] } },
  { id: 'LT', name: '立陶宛', code: '+370', rule: { pattern: 'XXX XXXXX', prefixes: ['600', '601', '602', '603', '604', '605', '606', '607', '608', '609', '610', '611', '612', '613', '614', '615', '616', '617', '618', '619', '620', '621', '622', '623', '624', '625', '626', '627', '628', '629', '630', '631', '632', '633', '634', '635', '636', '637', '638', '639', '640', '641', '642', '643', '644', '645', '646', '647', '648', '649', '650', '651', '652', '653', '654', '655', '656', '657', '658', '659', '660', '661', '662', '663', '664', '665', '666', '667', '668', '669', '670', '671', '672', '673', '674', '675', '676', '677', '678', '679', '680', '681', '682', '683', '684', '685', '686', '687', '688', '689', '690', '691', '692', '693', '694', '695', '696', '697', '698', '699'] } },
  { id: 'LU', name: '卢森堡', code: '+352', rule: { pattern: 'XXX XXX XXX', prefixes: ['621', '628', '661', '671', '681', '691'] } },
  { id: 'MO', name: '澳门', code: '+853', rule: { pattern: 'XXXX XXXX', prefixes: ['6'] } },
  { id: 'MG', name: '马达加斯加', code: '+261', rule: { pattern: 'XX XX XXX XX', prefixes: ['32', '33', '34', '38'] } },
  { id: 'MW', name: '马拉维', code: '+265', rule: { pattern: 'X XXXX XXXX', prefixes: ['77', '88', '99'] } },
  { id: 'MY', name: '马来西亚', code: '+60', rule: { pattern: 'XX-XXX XXXX', prefixes: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'] } },
  { id: 'MV', name: '马尔代夫', code: '+960', rule: { pattern: 'XXX-XXXX', prefixes: ['7', '9'] } },
  { id: 'ML', name: '马里', code: '+223', rule: { pattern: 'XX XX XX XX', prefixes: ['50', '60', '61', '62', '63', '64', '65', '66', '67', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'] } },
  { id: 'MT', name: '马耳他', code: '+356', rule: { pattern: 'XXXX XXXX', prefixes: ['7', '9'] } },
  { id: 'MH', name: '马绍尔群岛', code: '+692', rule: { pattern: 'XXX-XXXX' } },
  { id: 'MQ', name: '马提尼克岛', code: '+596', rule: { pattern: 'XXX XX XX XX', prefixes: ['696'] } },
  { id: 'MR', name: '毛里塔尼亚', code: '+222', rule: { pattern: 'XX XX XX XX', prefixes: ['22', '33', '44'] } },
  { id: 'MU', name: '毛里求斯', code: '+230', rule: { pattern: 'XXXX XXXX', prefixes: ['5'] } },
  { id: 'YT', name: '马约特', code: '+262', rule: { pattern: 'XXX XX XX XX', prefixes: ['639'] } },
  { id: 'MX', name: '墨西哥', code: '+52', rule: { pattern: 'XXX XXX XXXX', prefixes: ['33', '55', '81', '222', '229', '311', '442', '444', '449', '477', '614', '656', '662', '664', '686', '722', '833', '871', '998', '999'] } },
  { id: 'MD', name: '摩尔多瓦', code: '+373', rule: { pattern: 'XXXX XXXX', prefixes: ['6', '7'] } },
  { id: 'MC', name: '摩纳哥', code: '+377', rule: { pattern: 'XX XX XX XX', prefixes: ['4', '6'] } },
  { id: 'MN', name: '蒙古', code: '+976', rule: { pattern: 'XXXX XXXX', prefixes: ['8', '9'] } },
  { id: 'ME', name: '黑山共和国', code: '+382', rule: { pattern: 'XX XXX XXX', prefixes: ['63', '67', '68', '69'] } },
  { id: 'MS', name: '蒙塞拉特岛', code: '+1', rule: { pattern: '664-XXX-XXXX' } },
  { id: 'MA', name: '摩洛哥', code: '+212', rule: { pattern: 'XXX-XXXXXX', prefixes: ['6', '7'] } },
  { id: 'MZ', name: '莫桑比克', code: '+258', rule: { pattern: 'XX XXX XXXX', prefixes: ['82', '83', '84', '85', '86', '87'] } },
  { id: 'MM', name: '缅甸', code: '+95', rule: { pattern: 'XX XXX XXXX', prefixes: ['9'] } },
  { id: 'NA', name: '纳米比亚', code: '+264', rule: { pattern: 'XX XXX XXXX', prefixes: ['60', '81', '82', '85'] } },
  { id: 'NR', name: '瑙鲁', code: '+674', rule: { pattern: 'XXX XXXX' } },
  { id: 'NP', name: '尼泊尔', code: '+977', rule: { pattern: 'XXX-XXXXXXX', prefixes: ['980', '981', '982', '984', '985', '986'] } },
  { id: 'NL', name: '荷兰', code: '+31', rule: { pattern: 'X XXXX XXXX', prefixes: ['6'] } },
  { id: 'NC', name: '新喀里多尼亚', code: '+687', rule: { pattern: 'XX.XX.XX', prefixes: ['7', '8', '9'] } },
  { id: 'NZ', name: '新西兰', code: '+64', rule: { pattern: 'XX XXX XXXX', prefixes: ['20', '21', '22', '27', '28', '29'] } },
  { id: 'NI', name: '尼加拉瓜', code: '+505', rule: { pattern: 'XXXX XXXX', prefixes: ['5', '7', '8'] } },
  { id: 'NE', name: '尼日尔', code: '+227', rule: { pattern: 'XX XX XX XX', prefixes: ['80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99'] } },
  { id: 'NG', name: '尼日利亚', code: '+234', rule: { pattern: 'XXX XXX XXXX', prefixes: ['701', '702', '703', '704', '705', '706', '707', '708', '709', '802', '803', '804', '805', '806', '807', '808', '809', '810', '811', '812', '813', '814', '815', '816', '817', '818', '909', '908', '901', '902', '903', '904', '905', '906', '907', '912', '913', '914', '915', '916', '917', '918'] } },
  { id: 'NU', name: '纽埃', code: '+683', rule: { pattern: 'XXXX' } },
  { id: 'NF', name: '诺福克岛', code: '+672', rule: { pattern: 'X XXXXX' } },
  { id: 'KP', name: '朝鲜', code: '+850', rule: { pattern: 'XXX XXXX XXX' } },
  { id: 'MK', name: '北马其顿', code: '+389', rule: { pattern: 'XX XXX XXX', prefixes: ['70', '71', '72', '75', '76', '77', '78'] } },
  { id: 'MP', name: '北马里亚纳群岛', code: '+1', rule: { pattern: '670-XXX-XXXX' } },
  { id: 'NO', name: '挪威', code: '+47', rule: { pattern: 'XXX XX XXX', prefixes: ['4', '9'] } },
  { id: 'OM', name: '阿曼', code: '+968', rule: { pattern: 'XXXX XXXX', prefixes: ['9'] } },
  { id: 'PK', name: '巴基斯坦', code: '+92', rule: { pattern: 'XXX XXXXXXX', prefixes: ['300', '301', '302', '303', '304', '305', '306', '307', '308', '309', '310', '311', '312', '313', '314', '315', '316', '317', '318', '320', '321', '322', '323', '324', '325', '330', '331', '332', '333', '334', '335', '336', '337', '340', '341', '342', '343', '344', '345', '346', '347', '348', '349'] } },
  { id: 'PW', name: '帕劳', code: '+680', rule: { pattern: 'XXX XXXX' } },
  { id: 'PS', name: '巴勒斯坦', code: '+970', rule: { pattern: 'XXX XXX XXX', prefixes: ['56', '59'] } },
  { id: 'PA', name: '巴拿马', code: '+507', rule: { pattern: 'XXXX-XXXX', prefixes: ['6'] } },
  { id: 'PG', name: '巴布亚新几内亚', code: '+675', rule: { pattern: 'XXXX XXXX', prefixes: ['7'] } },
  { id: 'PY', name: '巴拉圭', code: '+595', rule: { pattern: 'XXX XXX XXX', prefixes: ['961', '971', '972', '973', '974', '975', '976', '981', '982', '983', '984', '985', '986', '991', '992', '993', '994', '995'] } },
  { id: 'PE', name: '秘鲁', code: '+51', rule: { pattern: 'XXX XXX XXX', prefixes: ['9'] } },
  { id: 'PH', name: '菲律宾', code: '+63', rule: { pattern: 'XXX XXX XXXX', prefixes: ['905', '906', '908', '915', '916', '917', '918', '919', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '930', '931', '932', '933', '934', '935', '936', '937', '938', '939', '940', '941', '942', '943', '945', '946', '947', '948', '949', '950', '951', '955', '956', '961', '963', '965', '966', '967', '968', '969', '970', '973', '974', '975', '976', '977', '978', '979', '981', '989', '992', '993', '994', '995', '996', '997', '998', '999'] } },
  { id: 'PL', name: '波兰', code: '+48', rule: { pattern: 'XXX XXX XXX', prefixes: ['45', '50', '51', '53', '57', '60', '66', '69', '72', '73', '78', '79', '88'] } },
  { id: 'PT', name: '葡萄牙', code: '+351', rule: { pattern: 'XXX XXX XXX', prefixes: ['91', '92', '93', '96'] } },
  { id: 'PR', name: '波多黎各', code: '+1', rule: { pattern: 'XXX-XXX-XXXX', prefixes: ['787', '939'] } },
  { id: 'QA', name: '卡塔尔', code: '+974', rule: { pattern: 'XXXX XXXX', prefixes: ['3', '5', '6', '7'] } },
  { id: 'RE', name: '留尼汪', code: '+262', rule: { pattern: 'XXX XX XX XX', prefixes: ['692', '693'] } },
  { id: 'CG', name: '刚果共和国', code: '+242', rule: { pattern: 'XX XXX XXXX', prefixes: ['04', '05', '06'] } },
  { id: 'RO', name: '罗马尼亚', code: '+40', rule: { pattern: 'XXX XXX XXX', prefixes: ['7'] } },
  { id: 'RU', name: '俄罗斯', code: '+7', rule: { pattern: 'XXX XXX-XX-XX', prefixes: ['900', '901', '902', '903', '904', '905', '906', '908', '909', '910', '911', '912', '913', '914', '915', '916', '917', '918', '919', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '930', '931', '932', '933', '934', '936', '937', '938', '950', '951', '952', '953', '958', '960', '961', '962', '963', '964', '965', '966', '967', '968', '969', '977', '978', '980', '981', '982', '983', '984', '985', '986', '987', '988', '989', '991', '992', '993', '994', '995', '996', '999'] } },
  { id: 'RW', name: '卢旺达', code: '+250', rule: { pattern: 'XXX XXX XXX', prefixes: ['72', '73', '78'] } },
  { id: 'BL', name: '圣巴泰勒米', code: '+590', rule: { pattern: 'XXX XX XX XX', prefixes: ['690'] } },
  { id: 'SH', name: '圣赫勒拿', code: '+290', rule: { pattern: 'XXXX' } },
  { id: 'KN', name: '圣基茨和尼维斯', code: '+1', rule: { pattern: '869-XXX-XXXX' } },
  { id: 'MF', name: '法属圣马丁', code: '+590', rule: { pattern: 'XXX XX XX XX', prefixes: ['690'] } },
  { id: 'PM', name: '圣皮埃尔和密克隆', code: '+508', rule: { pattern: 'XX XX XX' } },
  { id: 'VC', name: '圣文森特和格林纳丁斯', code: '+1', rule: { pattern: '784-XXX-XXXX' } },
  { id: 'WS', name: '萨摩亚', code: '+685', rule: { pattern: 'XX XXXXX', prefixes: ['7'] } },
  { id: 'SM', name: '圣马力诺', code: '+378', rule: { pattern: 'XXXX XXXXXX', prefixes: ['6'] } },
  { id: 'ST', name: '圣多美和普林西比', code: '+239', rule: { pattern: 'XX XXXXX', prefixes: ['98', '99'] } },
  { id: 'SA', name: '沙特阿拉伯', code: '+966', rule: { pattern: 'XX XXX XXXX', prefixes: ['50', '51', '52', '53', '54', '55', '56', '57', '58', '59'] } },
  { id: 'SN', name: '塞内加尔', code: '+221', rule: { pattern: 'XX XXX XX XX', prefixes: ['70', '75', '76', '77', '78'] } },
  { id: 'RS', name: '塞尔维亚', code: '+381', rule: { pattern: 'XX XXX XXXX', prefixes: ['60', '61', '62', '63', '64', '65', '66', '69'] } },
  { id: 'SC', name: '塞舌尔', code: '+248', rule: { pattern: 'X XXX XXX', prefixes: ['2', '5', '7'] } },
  { id: 'SL', name: '塞拉利昂', code: '+232', rule: { pattern: 'XX XXX XXX', prefixes: ['21', '25', '30', '31', '32', '33', '34', '40', '44', '50', '55', '76', '77', '78', '79', '88'] } },
  { id: 'SG', name: '新加坡', code: '+65', rule: { pattern: 'XXXX XXXX', prefixes: ['8', '9'] } },
  { id: 'SX', name: '荷属圣马丁', code: '+1', rule: { pattern: '721-XXX-XXXX' } },
  { id: 'SK', name: '斯洛伐克', code: '+421', rule: { pattern: 'XXX XXX XXX', prefixes: ['901', '902', '903', '904', '905', '906', '907', '908', '909', '910', '911', '912', '914', '915', '916', '917', '918', '919', '940', '944', '948', '949', '950', '951', '952'] } },
  { id: 'SI', name: '斯洛文尼亚', code: '+386', rule: { pattern: 'XX XXX XXX', prefixes: ['30', '31', '40', '41', '51', '64', '65', '68', '69', '70', '71'] } },
  { id: 'SB', name: '所罗门群岛', code: '+677', rule: { pattern: 'XX XXXXX', prefixes: ['7', '8'] } },
  { id: 'SO', name: '索马里', code: '+252', rule: { pattern: 'XX XXX XXXX', prefixes: ['61', '62', '63', '65', '66', '68', '69', '71', '90'] } },
  { id: 'ZA', name: '南非', code: '+27', rule: { pattern: 'XX XXX XXXX', prefixes: ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '71', '72', '73', '74', '76', '78', '79', '81', '82', '83', '84'] } },
  { id: 'KR', name: '韩国', code: '+82', rule: { pattern: 'XX-XXXX-XXXX', prefixes: ['10'] } },
  { id: 'SS', name: '南苏丹', code: '+211', rule: { pattern: 'XX XXX XXXX', prefixes: ['91', '92', '95', '96', '97'] } },
  { id: 'ES', name: '西班牙', code: '+34', rule: { pattern: 'XXX XX XX XX', prefixes: ['6', '7'] } },
  { id: 'LK', name: '斯里兰卡', code: '+94', rule: { pattern: 'XX XXX XXXX', prefixes: ['70', '71', '72', '74', '75', '76', '77', '78'] } },
  { id: 'LC', name: '圣卢西亚', code: '+1', rule: { pattern: '758-XXX-XXXX' } },
  { id: 'SD', name: '苏丹', code: '+249', rule: { pattern: 'XX XXX XXXX', prefixes: ['90', '91', '92', '99'] } },
  { id: 'SR', name: '苏里南', code: '+597', rule: { pattern: 'XXX-XXXX', prefixes: ['6', '7', '8'] } },
  { id: 'SZ', name: '斯威士兰', code: '+268', rule: { pattern: 'XXXX XXXX', prefixes: ['7', '8'] } },
  { id: 'SE', name: '瑞典', code: '+46', rule: { pattern: 'XX-XXX XX XX', prefixes: ['70', '72', '73', '76', '79'] } },
  { id: 'CH', name: '瑞士', code: '+41', rule: { pattern: 'XX XXX XX XX', prefixes: ['74', '75', '76', '77', '78', '79'] } },
  { id: 'SY', name: '叙利亚', code: '+963', rule: { pattern: 'XXX XXX XXX', prefixes: ['91', '92', '93', '94', '95', '96', '98', '99'] } },
  { id: 'TW', name: '台湾', code: '+886', rule: { pattern: 'XXXX XXX XXX', prefixes: ['9'] } },
  { id: 'TJ', name: '塔吉克斯坦', code: '+992', rule: { pattern: 'XX XXX XXXX', prefixes: ['50', '55', '77', '90', '91', '92', '93', '95', '98'] } },
  { id: 'TZ', name: '坦桑尼亚', code: '+255', rule: { pattern: 'XXX XXX XXX', prefixes: ['61', '62', '65', '67', '68', '69', '71', '73', '74', '75', '76', '77', '78'] } },
  { id: 'TH', name: '泰国', code: '+66', rule: { pattern: 'XX XXX XXXX', prefixes: ['6', '8', '9'] } },
  { id: 'BS', name: '巴哈马', code: '+1', rule: { pattern: '242-XXX-XXXX' } },
  { id: 'GM', name: '冈比亚', code: '+220', rule: { pattern: 'XXX XXXX', prefixes: ['2', '3', '5', '6', '7', '9'] } },
  { id: 'TL', name: '东帝汶', code: '+670', rule: { pattern: 'XXXX XXXX', prefixes: ['7'] } },
  { id: 'TG', name: '多哥', code: '+228', rule: { pattern: 'XX XX XX XX', prefixes: ['90', '91', '92', '93', '97', '98', '99'] } },
  { id: 'TK', name: '托克劳', code: '+690', rule: { pattern: 'XXXX' } },
  { id: 'TO', name: '汤加', code: '+676', rule: { pattern: 'XXX XXXX', prefixes: ['7', '8'] } },
  { id: 'TT', name: '特立尼达和多巴哥', code: '+1', rule: { pattern: '868-XXX-XXXX' } },
  { id: 'TN', name: '突尼斯', code: '+216', rule: { pattern: 'XX XXX XXX', prefixes: ['2', '4', '5', '9'] } },
  { id: 'TR', name: '土耳其', code: '+90', rule: { pattern: 'XXX XXX XXXX', prefixes: ['501', '505', '506', '507', '530', '531', '532', '533', '534', '535', '536', '537', '538', '539', '540', '541', '542', '543', '544', '545', '546', '547', '548', '549', '551', '552', '553', '554', '555', '559', '561'] } },
  { id: 'TM', name: '土库曼斯坦', code: '+993', rule: { pattern: 'XX XXXXXX', prefixes: ['6'] } },
  { id: 'TC', name: '特克斯和凯科斯群岛', code: '+1', rule: { pattern: '649-XXX-XXXX' } },
  { id: 'TV', name: '图瓦卢', code: '+688', rule: { pattern: 'XXXXX' } },
  { id: 'UG', name: '乌干达', code: '+256', rule: { pattern: 'XXX XXX XXX', prefixes: ['70', '71', '72', '73', '74', '75', '76', '77', '78', '79'] } },
  { id: 'UA', name: '乌克兰', code: '+380', rule: { pattern: 'XX XXX XX XX', prefixes: ['39', '50', '63', '66', '67', '68', '73', '91', '92', '93', '94', '95', '96', '97', '98', '99'] } },
  { id: 'AE', name: '阿联酋', code: '+971', rule: { pattern: 'XX XXX XXXX', prefixes: ['50', '52', '54', '55', '56', '58'] } },
  { id: 'GB', name: '英国', code: '+44', rule: { pattern: 'XXXX XXXXXX', prefixes: ['7'] } },
  { id: 'US', name: '美国', code: '+1', rule: { pattern: 'XXX-XXX-XXXX', prefixes: ['201', '202', '203', '205', '206', '207', '208', '209', '210', '212', '213', '214', '215', '216', '217', '218', '219', '220', '223', '224', '225', '227', '228', '229', '231', '234', '239', '240', '248', '251', '252', '253', '254', '256', '260', '262', '267', '269', '270', '272', '274', '276', '279', '281', '301', '302', '303', '304', '305', '307', '308', '309', '310', '312', '313', '314', '315', '316', '317', '318', '319', '320', '321', '323', '325', '330', '331', '334', '336', '337', '339', '346', '347', '351', '352', '360', '361', '364', '380', '385', '386', '401', '402', '404', '405', '406', '407', '408', '409', '410', '412', '413', '414', '415', '417', '419', '423', '424', '425', '430', '432', '434', '435', '440', '442', '443', '447', '458', '463', '469', '470', '475', '478', '479', '480', '484', '501', '502', '503', '504', '505', '507', '508', '509', '510', '512', '513', '515', '516', '517', '518', '520', '530', '531', '534', '539', '540', '541', '551', '559', '561', '562', '563', '564', '567', '570', '571', '573', '574', '575', '580', '585', '586', '601', '602', '603', '605', '606', '607', '608', '609', '610', '612', '614', '615', '616', '617', '618', '619', '620', '623', '626', '628', '629', '630', '631', '636', '641', '646', '650', '651', '657', '659', '660', '661', '662', '667', '669', '678', '680', '681', '682', '701', '702', '703', '704', '706', '707', '708', '712', '713', '714', '715', '716', '717', '718', '719', '720', '724', '725', '727', '730', '731', '732', '734', '737', '740', '743', '747', '754', '757', '760', '762', '763', '765', '769', '770', '772', '773', '774', '775', '779', '781', '785', '786', '801', '802', '803', '804', '805', '806', '808', '810', '812', '813', '814', '815', '816', '817', '818', '828', '830', '831', '832', '835', '843', '845', '847', '848', '850', '854', '856', '857', '858', '859', '860', '862', '863', '864', '865', '870', '872', '878', '901', '903', '904', '906', '907', '908', '909', '910', '912', '913', '914', '915', '916', '917', '918', '919', '920', '925', '928', '929', '930', '931', '936', '937', '938', '940', '941', '947', '949', '951', '952', '954', '956', '959', '970', '971', '972', '973', '975', '978', '979', '980', '984', '985', '986', '989'] } },
  { id: 'UY', name: '乌拉圭', code: '+598', rule: { pattern: 'XX XXX XXX', prefixes: ['9'] } },
  { id: 'VI', name: '美属维尔京群岛', code: '+1', rule: { pattern: '340-XXX-XXXX' } },
  { id: 'UZ', name: '乌兹别克斯坦', code: '+998', rule: { pattern: 'XX XXX XX XX', prefixes: ['88', '90', '91', '93', '94', '95', '97', '98', '99'] } },
  { id: 'VU', name: '瓦努阿图', code: '+678', rule: { pattern: 'XX XXXXX', prefixes: ['5', '7'] } },
  { id: 'VA', name: '梵蒂冈城', code: '+39', rule: { pattern: 'XXX XXX XXXX', prefixes: ['3'] } },
  { id: 'VE', name: '委内瑞拉', code: '+58', rule: { pattern: 'XXX-XXX-XXXX', prefixes: ['412', '414', '416', '424', '426'] } },
  { id: 'VN', name: '越南', code: '+84', rule: { pattern: 'XX XXX XXXX', prefixes: ['3', '5', '7', '8', '9'] } },
  { id: 'WF', name: '瓦利斯和富图纳群岛', code: '+681', rule: { pattern: 'XX XX XX' } },
  { id: 'EH', name: '西撒哈拉', code: '+212', rule: { pattern: 'XXX-XXXXXX', prefixes: ['6', '7'] } },
  { id: 'YE', name: '也门', code: '+967', rule: { pattern: 'XXX XXX XXX', prefixes: ['70', '71', '73', '77', '78'] } },
  { id: 'ZM', name: '赞比亚', code: '+260', rule: { pattern: 'XX XXX XXXX', prefixes: ['95', '96', '97'] } },
  { id: 'ZW', name: '津巴布韦', code: '+263', rule: { pattern: 'XX XXX XXXX', prefixes: ['71', '73', '77', '78'] } }
];

// 快速随机数生成（性能优化）
function fastRandom(max: number): number {
  return Math.floor(Math.random() * max);
}

// 生成单个随机数字
function randomDigit(): string {
  return String(fastRandom(10));
}

// 生成手机号的辅助函数（性能优化版）
export function generatePhoneNumber(country: CountryData, count: number = 1): string[] {
  const results: string[] = [];
  const { pattern, prefixes } = country.rule;

  // 性能优化：预编译正则表达式
  const xRegex = /X/g;

  // 批量生成
  for (let i = 0; i < count; i++) {
    let number: string;

    if (prefixes && prefixes.length > 0) {
      // 有前缀：随机选择一个真实运营商前缀
      const prefix = prefixes[fastRandom(prefixes.length)];
      let prefixIndex = 0;

      // 替换：前几位用前缀，剩余位用随机数字
      number = pattern.replace(xRegex, () => {
        if (prefixIndex < prefix.length) {
          return prefix[prefixIndex++];
        }
        return randomDigit();
      });
    } else {
      // 无前缀：pattern中的非X字符是固定的（如 684-XXX-XXXX 中的 684）
      // 只替换 X，保留其他字符
      number = pattern.replace(xRegex, randomDigit);
    }

    results.push(`${country.code} ${number}`);
  }

  return results;
}

// 搜索国家
export function searchCountries(query: string): CountryData[] {
  if (!query.trim()) return countries;

  const lowerQuery = query.toLowerCase();
  return countries.filter(
    country =>
      country.name.toLowerCase().includes(lowerQuery) ||
      country.code.includes(lowerQuery) ||
      country.id.toLowerCase().includes(lowerQuery)
  );
}

// 获取国家数量
export function getCountryCount(): number {
  return countries.length;
}
