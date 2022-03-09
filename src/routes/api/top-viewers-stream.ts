import { getTwitchStreams } from '$lib/services/twitch';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  const twitchStreams = await getTwitchStreams();

  return {
    body: twitchStreams[0],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'X-Requested-With',
    }
  };
};
