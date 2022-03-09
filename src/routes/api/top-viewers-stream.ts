import { getTwitchStreams } from '$lib/services/twitch';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
  const twitchStreams = await getTwitchStreams();

  return {
    body: twitchStreams[0],
  };
};
