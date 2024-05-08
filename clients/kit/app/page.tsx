"use client";

import { AspectRatio, Image } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/database.types';

export default function Index() {
  const supabase = createClientComponentClient<Database>();
  const suits = ["spades", "diamonds", "clubs", "hearts"];
  const ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
  return (
    <Carousel slideSize="80%" w={"98%"} height={"100%"} slideGap="xs" loop withControls={false}>
      {
        suits.map((suit) => {
          const suitSet = ranks.map((rank) => {
            const cardSource = supabase.storage.from("cards").getPublicUrl(`${suit}/English_pattern_${rank}_of_${suit}.svg`);
            return (
              <Carousel.Slide>
                <AspectRatio key={`${rank} of ${suit}`} ratio={2 / 3}>
                    <Image
                      src={cardSource.data.publicUrl}
                      alt={`${rank} of ${suit}`}
                    />
                </AspectRatio>
              </Carousel.Slide>
            );
          })
          return (suitSet);
        })
      }
    </Carousel>
  )
}
