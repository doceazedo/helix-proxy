import 'dotenv/config';

type TwitchUsersResponse = {
  data: {
    id: string;
    login: string;
    display_name: string;
    type: string;
    broadcaster_type: string;
    description: string;
    profile_image_url: string;
    offline_image_url: string;
    view_count: number;
    created_at: Date;
  }[];
};

type TwitchStreamsResponse = {
  data: {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    game_id: string;
    game_name: string;
    type: string;
    title: string;
    viewer_count: number;
    started_at: Date;
    language: string;
    thumbnail_url: string;
    tag_ids: string[];
    is_mature: boolean;
  }[];
};

const baseUrl = 'https://api.twitch.tv/helix';
const { TWITCH_CLIENT_ID, TWITCH_OAUTH_TOKEN } = process.env;

console.log({ TWITCH_CLIENT_ID, TWITCH_OAUTH_TOKEN });

export const getTwitchUser = async (login: string) => {
  const resp = await fetch(`${baseUrl}/users?login=${login}`, {
    headers: {
      Authorization: `Bearer ${TWITCH_OAUTH_TOKEN}`,
      'Client-Id': TWITCH_CLIENT_ID,
    },
  });
  const data: TwitchUsersResponse = await resp.json();
  return data.data[0];
};


export const getTwitchStreams = async () => {
  const resp = await fetch(`${baseUrl}/streams`, {
    headers: {
      Authorization: `Bearer ${TWITCH_OAUTH_TOKEN}`,
      'Client-Id': TWITCH_CLIENT_ID,
    },
  });
  const data: TwitchStreamsResponse = await resp.json();
  return data.data;
};
