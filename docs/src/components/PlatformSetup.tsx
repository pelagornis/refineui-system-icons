import { useState } from 'react';
import {
  Badge,
  Divider,
  Stack,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Toaster,
} from '@refineui/react';
import { PLATFORMS } from '../data/platforms';
import { CodeSnippet } from './CodeSnippet';

export default function PlatformSetup() {
  const [platformId, setPlatformId] = useState(PLATFORMS[0].id);

  return (
    <>
      <Tabs value={platformId} onValueChange={(value) => setPlatformId(value as typeof platformId)}>
        <TabsList className="flex-wrap">
          {PLATFORMS.map((platform) => (
            <TabsTrigger key={platform.id} value={platform.id}>
              {platform.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {PLATFORMS.map((platform) => (
          <TabsContent key={platform.id} value={platform.id}>
            <Stack direction="column" gap="sizeLarge" className="pt-refineui-size-medium">
              <Stack direction="row" align="center" gap="sizeXSmall" wrap>
                <Text variant="titleSm" as="h3">
                  {platform.coordinate}
                </Text>
                <Badge variant="neutral">{platform.version}</Badge>
              </Stack>

              <Text variant="bodyMd" as="p" className="text-refineui-alias-foreground-secondary">
                {platform.summary}
              </Text>

              <Divider />

              {platform.steps.map((step) => (
                <Stack key={step.title} direction="column" gap="sizeXSmall">
                  <Text
                    variant="captionSm"
                    as="h4"
                    className="uppercase tracking-wide text-refineui-alias-foreground-tertiary"
                  >
                    {step.title}
                  </Text>
                  {step.note && (
                    <Text
                      variant="captionLg"
                      as="p"
                      className="text-refineui-alias-foreground-secondary"
                    >
                      {step.note}
                    </Text>
                  )}
                  <CodeSnippet code={step.code} label={`${platform.label} ${step.title}`} />
                </Stack>
              ))}
            </Stack>
          </TabsContent>
        ))}
      </Tabs>

      <Toaster />
    </>
  );
}
