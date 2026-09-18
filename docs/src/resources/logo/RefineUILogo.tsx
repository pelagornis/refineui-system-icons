import { iconSizes } from "@refineui/tokens";

/** RefineUI wordmark — inline SVG for header branding. */
export function RefineUILogo() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 255 255"
            width={iconSizes.small}
            height={iconSizes.small}
            aria-hidden
            data-refineui-docs-logo-mark
        >
            <path
                fill="currentColor"
                d="M20 230.521V77.9538C20 33.2093 61.6259 20.6744 82.4388 20H229.358C231.88 20 233.925 22.0054 233.925 24.4792V77.9538C233.658 121.139 198.386 139.125 177.741 143.561C176.087 143.917 175.275 145.818 176.25 147.177L234.161 227.944C236.289 230.912 234.124 235 230.425 235H168.06C166.509 235 165.065 234.229 164.223 232.951L109.983 150.604C108.748 148.729 105.782 149.587 105.782 151.819V230.521C105.782 232.995 103.737 235 101.215 235H24.5671C22.0448 235 20 232.995 20 230.521Z"
            />
        </svg>
    );
}
