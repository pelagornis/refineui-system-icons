import { Button, Stack, WebIcon, toast } from '@refineui/react';

interface CodeSnippetProps {
  code: string;
  /** Used for the copy button's accessible name and the toast message */
  label: string;
}

export function CodeSnippet({ code, label }: CodeSnippetProps) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast(`Copied ${label}`);
    } catch {
      toast(`Could not copy ${label}`, { variant: 'error' });
    }
  };

  return (
    <Stack
      direction="row"
      align="start"
      gap="sizeXSmall"
      className="rounded-refineui-large bg-refineui-alias-surface-sunken p-refineui-size-small"
    >
      <pre className="m-0 min-w-0 flex-1 overflow-x-auto whitespace-pre-wrap break-words font-mono text-xs leading-relaxed text-refineui-alias-foreground-primary">
        {code}
      </pre>
      <Button variant="ghost" size="sm" layout="icon" onClick={copy} aria-label={`Copy ${label}`}>
        <WebIcon name="copy" size={16} />
      </Button>
    </Stack>
  );
}
