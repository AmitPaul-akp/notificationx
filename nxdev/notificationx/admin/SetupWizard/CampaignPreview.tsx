import { __ } from "@wordpress/i18n";
import React from "react";

/**
 * Static HTML/CSS mockups of each NotificationX notification "Type", shown on
 * the Recommended step in place of the old marketing GIFs. Each preview mirrors
 * the real frontend theme design (see frontend/scss/_themes/*) so users see an
 * accurate, crisp representation of what the campaign produces — and so we can
 * layer in motion later without swapping the markup.
 *
 * Keyed off the campaign `type` (the TypesFactory identifier set in
 * CAMPAIGN_CATALOG). Sample copy is representative, not live data.
 *
 * NOTE: purely static for now — animations are intentionally deferred.
 */

/** Small inline avatar: a soft gradient disc with initials. Avoids asset deps. */
const Avatar = ({ initials, className = "" }: { initials: string; className?: string }) => (
    <span className={`cp-avatar ${className}`} aria-hidden="true">
        {initials}
    </span>
);

/** The little green "Verified by NotificationX" trust badge used by sales themes. */
const Verified = () => (
    <span className="cp-verified">
        <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="#1aab5c" />
            <path
                d="M4.5 8.2l2.1 2.1 4-4.4"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
        {__("Verified by NotificationX", "notificationx")}
    </span>
);

/** Generic image-placeholder glyph (mountain + sun) used in the growth mockup. */
const ImageGlyph = () => (
    <svg viewBox="0 0 48 40" className="cp-imgglyph" aria-hidden="true">
        <rect x="1" y="1" width="46" height="38" rx="4" fill="#dfe4f7" />
        <circle cx="15" cy="14" r="4.5" fill="#9fb4ef" />
        <path d="M6 34l11-12 8 8 6-6 11 10z" fill="#9fb4ef" />
    </svg>
);

const SalesPreview = () => (
    <div className="cp-card cp-card--sales">
        <Avatar initials="JS" />
        <div className="cp-lines">
            <div className="cp-row cp-row--title">
                <strong>John S.</strong>
            </div>
            <div className="cp-row cp-row--sub">
                {__("Purchased", "notificationx")} <strong>T-Shirt</strong>
                <span className="cp-dot">·</span>
                {__("2 days ago", "notificationx")}
            </div>
            <Verified />
        </div>
        <span className="cp-cta">{__("Buy now", "notificationx")} ›</span>
    </div>
);

const ReviewsPreview = () => (
    <div className="cp-card cp-card--reviews">
        <Avatar initials="ES" className="cp-avatar--lg" />
        <div className="cp-lines">
            <div className="cp-row cp-row--title">
                <strong>Emily S.</strong> {__("commented on", "notificationx")}
            </div>
            <div className="cp-row cp-row--strong">
                {__("10 Proven Strategies to Increase…", "notificationx")}
            </div>
            <div className="cp-stars" aria-hidden="true">
                ★★★★★
            </div>
        </div>
    </div>
);

/** Shopping-bag glyph for the Growth Alert thumbnail badge (matches the real
 * Inline theme's teal corner badge). */
const ShoppingBag = () => (
    <svg
        viewBox="0 0 24 24"
        width="11"
        height="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M6 7h12l-1 13H7L6 7z" />
        <path d="M9 7V5.5a3 3 0 0 1 6 0V7" />
    </svg>
);

const GrowthPreview = () => (
    <div className="cp-card cp-card--growth">
        <div className="cp-prod">
            <span className="cp-prod-badge" aria-hidden="true">
                <ShoppingBag />
            </span>
            <ImageGlyph />
        </div>
        <div className="cp-lines">
            <div className="cp-growth-r1">
                <strong className="cp-num">739</strong>{" "}
                {__("people purchased", "notificationx")}
            </div>
            <div className="cp-growth-r2">
                {__("in last", "notificationx")} <strong>{__("7 days", "notificationx")}</strong>
            </div>
        </div>
    </div>
);

const ElearningPreview = () => (
    <div className="cp-card cp-card--elearning">
        <span className="cp-wp" aria-hidden="true">
            W
        </span>
        <div className="cp-lines">
            <div className="cp-row cp-row--title">
                <strong>Emily S.</strong> {__("just enrolled", "notificationx")}
            </div>
            <div className="cp-row cp-row--strong">
                {__("WordPress Plugin Development", "notificationx")}
            </div>
            <div className="cp-row cp-row--muted">{__("11 minutes ago", "notificationx")}</div>
        </div>
    </div>
);

const BarPreview = () => (
    <div className="cp-bar">
        <span className="cp-bar__timer">25:21:02</span>
        <span className="cp-bar__text">
            {__("Mega Sale —", "notificationx")} <strong>{__("50% Off", "notificationx")}</strong>
        </span>
        <span className="cp-bar__cta">{__("Get Offer", "notificationx")}</span>
    </div>
);

const DiscountPreview = () => (
    <div className="cp-card cp-card--discount">
        <div className="cp-disc-badge">
            <span className="cp-disc-tag">{__("Grab Now", "notificationx")}</span>
            <strong className="cp-disc-pct">25%</strong>
            <span className="cp-disc-off">{__("OFF", "notificationx")}</span>
        </div>
        <div className="cp-lines">
            <div className="cp-row cp-row--strong">
                {__("Flash Sale: Limited Offer!", "notificationx")}
            </div>
            <div className="cp-row cp-row--sub">
                {__("Use code", "notificationx")} <strong>SAVE25</strong>
            </div>
            <div className="cp-row cp-row--muted">
                {__("Hurry — ends tonight!", "notificationx")}
            </div>
        </div>
    </div>
);

/** Shopping-bags illustration for the exit-intent lifestyle pane. */
const ShopperArt = () => (
    <svg viewBox="0 0 90 124" className="cp-popup__art" aria-hidden="true" preserveAspectRatio="xMidYMax meet">
        {/* back bag */}
        <g transform="rotate(-8 40 78)">
            <path d="M22 64h34l-3 44H25z" fill="#7cc6e8" />
            <path d="M30 64v-6a9 9 0 0 1 18 0v6" fill="none" stroke="#5fb0d6" strokeWidth="3" />
        </g>
        {/* front bag */}
        <g transform="rotate(7 56 84)">
            <path d="M44 70h34l-3 46H47z" fill="#c8a8f0" />
            <path d="M52 70v-6a9 9 0 0 1 18 0v6" fill="none" stroke="#a981e6" strokeWidth="3" />
            <circle cx="61" cy="90" r="6" fill="#fff" opacity="0.55" />
        </g>
    </svg>
);

const ExitIntentPreview = () => (
    <div className="cp-popup">
        <div className="cp-popup__left">
            <span className="cp-popup__tag">{__("FLASH SALE", "notificationx")}</span>
            <strong className="cp-popup__big">50% OFF</strong>
            <span className="cp-popup__sub">{__("ON ENTIRE ORDER", "notificationx")}</span>
            <span className="cp-popup__cta">{__("Shop The Sale Now", "notificationx")}</span>
            <span className="cp-popup__no">{__("No, thanks!", "notificationx")}</span>
        </div>
        <div className="cp-popup__right">
            <ShopperArt />
            <span className="cp-popup__close" aria-hidden="true">
                ×
            </span>
        </div>
    </div>
);

const AnnouncementPreview = () => (
    <div className="cp-modal">
        <div className="cp-modal__card">
            <span className="cp-modal__close" aria-hidden="true">
                ×
            </span>
            <div className="cp-row cp-row--strong">
                {__("We've Got News!", "notificationx")}
            </div>
            <div className="cp-row cp-row--sub cp-row--wrap">
                {__("New features just landed — see what's new.", "notificationx")}
            </div>
            <span className="cp-modal__cta">{__("Learn More", "notificationx")}</span>
        </div>
    </div>
);

const FlashingPreview = () => (
    <div className="cp-browser">
        <div className="cp-browser__bar">
            {/* Your site's tab — inactive (visitor switched away) but its title
                + favicon flash to win them back. The active tab is the other. */}
            <span className="cp-browser__tab is-flashing">
                <span className="cp-browser__fav" aria-hidden="true" />
                {__("(1) New offer!", "notificationx")}
            </span>
            <span className="cp-browser__tab is-active">{__("Store", "notificationx")}</span>
        </div>
        <div className="cp-browser__page">
            <span className="cp-skel cp-skel--w60" />
            <span className="cp-skel cp-skel--w90" />
            <span className="cp-skel cp-skel--w80" />
        </div>
    </div>
);

/* ------------------------------------------------------------------ *
 * Browser-window chrome
 * ------------------------------------------------------------------ *
 * Wraps each preview so the notification reads as if it's firing inside a
 * site — but kept to just the browser *shape*: a window bar with the three
 * traffic-light dots and an empty address-bar pill, over a faint skeleton
 * page. No tab title / URL / progress bar. Purely decorative — the
 * notification mock (`.nx-sw__preview`) overlays the page region.
 */
const BrowserChrome = () => (
    <div className="nx-sw__cb-chrome" aria-hidden="true">
        <span className="nx-sw__cb-dots">
            <i />
            <i />
            <i />
        </span>
        <span className="nx-sw__cb-omni" />
    </div>
);

/** Faint wireframe of the visitor's page, behind the notification. */
const PageSkeleton = () => (
    <div className="nx-sw__cb-page-skel" aria-hidden="true">
        <span className="nx-sw__cb-sk nx-sw__cb-sk--title" />
        <span className="nx-sw__cb-sk nx-sw__cb-sk--w80" />
        <div className="nx-sw__cb-sk-grid">
            <span className="nx-sw__cb-sk-thumb" />
            <span className="nx-sw__cb-sk-thumb" />
            <span className="nx-sw__cb-sk-thumb" />
        </div>
    </div>
);

const PREVIEWS: Record<string, React.FC> = {
    conversions: SalesPreview,
    reviews: ReviewsPreview,
    inline: GrowthPreview,
    elearning: ElearningPreview,
    notification_bar: BarPreview,
    offer_announcement: DiscountPreview,
    exit_intent: ExitIntentPreview,
    popup: AnnouncementPreview,
    flashing_tab: FlashingPreview,
};

const CampaignPreview = ({ type }: { type: string }) => {
    const Preview = PREVIEWS[type] || SalesPreview;

    // The Flashing-Tab preview IS a browser window already — wrapping it in
    // more chrome would be a browser-in-a-browser, so it renders bare.
    if (type === "flashing_tab") {
        return (
            <div className="nx-sw__preview nx-sw__preview--flashing_tab">
                <Preview />
            </div>
        );
    }

    return (
        <div className={`nx-sw__viewport nx-sw__viewport--${type}`}>
            <BrowserChrome />
            <div className="nx-sw__cb-page">
                <PageSkeleton />
                <div className={`nx-sw__preview nx-sw__preview--${type}`}>
                    <Preview />
                </div>
            </div>
        </div>
    );
};

export default CampaignPreview;
