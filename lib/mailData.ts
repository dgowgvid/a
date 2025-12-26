export interface TempMail {
  id: string;
  name: string;
  url: string;
  description?: string;
}

export const tempMailList: TempMail[] = [
  { id: '1', name: 'Fake Mail Generator', url: 'https://www.fakemailgenerator.com/', description: '批量生成' },
  { id: '2', name: '10 Minute Mail', url: 'https://10minutemail.com/', description: '10分钟有效期' },
  { id: '3', name: 'Guerrilla Mail', url: 'https://www.guerrillamail.com/', description: '简单快速' },
  { id: '4', name: 'Temp Mail', url: 'https://temp-mail.org/', description: '自动刷新收件箱' },
  { id: '5', name: 'Mohmal', url: 'https://www.mohmal.com/zh', description: '支持阿拉伯语' },
  { id: '6', name: 'TempMail.plus', url: 'https://tempmail.plus/', description: '现代化界面' },
  { id: '7', name: 'Maildrop', url: 'https://maildrop.cc/', description: '无需注册' },
  { id: '8', name: 'Internxt', url: 'https://internxt.com/zh/temporary-email', description: '隐私保护' },
  { id: '9', name: '临时邮箱网', url: 'https://www.linshiyouxiang.net/', description: '中文界面' },
  { id: '10', name: 'Temp Mail IO', url: 'https://temp-mail.io/zh', description: '简洁易用' },
  { id: '11', name: 'Moakt', url: 'https://moakt.com/zh', description: '多语言支持' },
  { id: '12', name: '24Mail', url: 'http://24mail.chacuo.net/', description: '24小时有效' },
  { id: '13', name: 'AWSL Mail', url: 'https://mail.awsl.uk/', description: '快速创建' },
  { id: '14', name: 'TempM', url: 'https://tempm.com/', description: '即时收信' },
  { id: '15', name: 'Mail.tm', url: 'https://mail.tm/zh/', description: 'API支持' },
  { id: '16', name: '临时Email', url: 'https://www.linshi-email.com/', description: '中文服务' },
  { id: '17', name: '临时邮', url: 'https://linshiyou.com/', description: '简单便捷' },
  { id: '18', name: 'SmailPro', url: 'https://smailpro.com/temporary-email', description: '专业服务' },
  { id: '19', name: '22.do', url: 'https://22.do/', description: '极简设计' },
  { id: '20', name: 'TempMail100', url: 'https://tempmail100.com/zh-cn/', description: '多域名选择' },
  { id: '21', name: 'Rootsh', url: 'https://rootsh.com/', description: '开发者友好' },
  { id: '22', name: 'smail.pw', url: 'https://smail.pw/', description: '1' },
];

export function getFavorites(): TempMail[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('mail_favorites');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveFavorites(favorites: TempMail[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('mail_favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error('Failed to save favorites:', error);
  }
}

export function isFavorite(id: string): boolean {
  const favorites = getFavorites();
  return favorites.some(item => item.id === id);
}

export function toggleFavorite(mail: TempMail): boolean {
  const favorites = getFavorites();
  const index = favorites.findIndex(item => item.id === mail.id);
  
  if (index > -1) {
    favorites.splice(index, 1);
    saveFavorites(favorites);
    return false;
  } else {
    favorites.push(mail);
    saveFavorites(favorites);
    return true;
  }
}

export function removeFavorite(id: string): void {
  const favorites = getFavorites();
  const filtered = favorites.filter(item => item.id !== id);
  saveFavorites(filtered);
}