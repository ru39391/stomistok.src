import { FC } from 'react';

import { SocialItem } from '@entities/social';
import { useItemsData } from '@shared/hooks';
import { OkIcon, TelegramIcon, VkIcon } from '@shared/icons';
import type { ISocialList } from '../types';

const SocialList: FC<ISocialList> = ({ classMod }) => {
  const { isLoading, itemsList } = useItemsData('social');

  if(isLoading) {
    return '';
  }

  const icons = {
    ok: <OkIcon />,
    tg: <TelegramIcon />,
    vk: <VkIcon />,
  };

  return (
    <div className={`social-wrapper ${classMod || ''}`}>
      {itemsList.map(({ key, ...data }) => <SocialItem key={key} {...data}>{icons[key]}</SocialItem>)}
    </div>
  );
};

export default SocialList;
