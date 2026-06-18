import { __ } from "@wordpress/i18n";
import React, { useState } from "react";

/**
 * Welcome illustration: a mini browser window whose page sits as a skeleton
 * wireframe, with the NotificationX Sales Popup sliding in at the bottom-left
 * corner — exactly how the notification appears to real visitors. The popup
 * cycles through buyers continuously (each card runs one in → hold → out cycle,
 * then the next buyer slides in).
 */

type Sale = {
    letter: string;
    from: string;
    to: string;
    name: string;
    meta: string;
};

const SALES: Sale[] = [
    { letter: "A", from: "#897fff", to: "#4a3aff", name: __("Alex just purchased!", "notificationx"), meta: __("Pro Plan • 2 mins ago", "notificationx") },
    { letter: "S", from: "#f093fb", to: "#f5576c", name: __("Sarah just signed up!", "notificationx"), meta: __("Yoga Starter Kit • just now", "notificationx") },
    { letter: "J", from: "#4facfe", to: "#00c6fb", name: __("James just purchased!", "notificationx"), meta: __("Annual Plan • 5 mins ago", "notificationx") },
    { letter: "E", from: "#43e97b", to: "#12b886", name: __("Emma just purchased!", "notificationx"), meta: __("Headphones • 8 mins ago", "notificationx") },
];

const avatar = (letter: string, c1: string, c2: string) =>
    "data:image/svg+xml," +
    encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${c1}'/><stop offset='1' stop-color='${c2}'/></linearGradient></defs><rect width='96' height='96' rx='48' fill='url(#g)'/><text x='50%' y='55%' font-family='Inter,Arial,sans-serif' font-size='42' font-weight='700' fill='#fff' text-anchor='middle' dominant-baseline='middle'>${letter}</text></svg>`
    );

const Illustration = () => {
    const [i, setI] = useState(0);
    const item = SALES[i % SALES.length];

    return (
        <div className="nx-sw__showcase">
            {/* Stage wraps the browser + popup. It does NOT clip, so the Sales
                Popup can overhang the browser's left edge (outside the window). */}
            <div className="nx-sw__stage">
            <div className="nx-sw__browser">
                {/* browser chrome */}
                <div className="nx-sw__browser-bar">
                    <span className="nx-sw__browser-dots">
                        <i />
                        <i />
                        <i />
                    </span>
                    <span className="nx-sw__tab">
                        <span className="nx-sw__tab-fav" />
                        <span className="nx-sw__tab-title">
                            {__("My Store", "notificationx")}
                        </span>
                    </span>
                    <span className="nx-sw__live-badge">
                        <i className="nx-sw__live-dot" />
                        {__("Live", "notificationx")}
                    </span>
                </div>

                {/* site viewport — a skeleton wireframe of the visitor's page */}
                <div className="nx-sw__site">
                    {/* Product-catalog skeleton: a text column on the left and a
                        grid of product cards (image + caption) on the right —
                        the kind of store page a Sales Popup runs on. */}
                    <div className="nx-sw__wire" aria-hidden="true">
                        <div className="nx-sw__wire-aside">
                            <span className="nx-sw__wire-line nx-sw__wire-line--title" />
                            <span className="nx-sw__wire-line" />
                            <span className="nx-sw__wire-line" />
                            <span className="nx-sw__wire-line nx-sw__wire-line--short" />
                            <span className="nx-sw__wire-pill" />
                        </div>
                        <div className="nx-sw__wire-grid">
                            {[0, 1, 2, 3].map((n) => (
                                <div className="nx-sw__wire-card" key={n}>
                                    <span className="nx-sw__wire-thumb" />
                                    <span className="nx-sw__wire-line nx-sw__wire-line--short" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dim scrim over the wireframe so the Sales Popup pulls
                        focus — the page recedes, the notification stands out. */}
                    <div className="nx-sw__site-dim" aria-hidden="true" />
                </div>
            </div>

            {/* Sales Popup — overhangs the browser's left edge (outside the
                window) and lifted off the bottom. Rendered on the stage (not in
                the clipped site) so the overhang isn't cut off. Keyed so each
                buyer runs one clean in → hold → out cycle. */}
            <div
                className="nx-sw__slot-popup"
                key={i}
                onAnimationEnd={(e) => {
                    if (e.animationName === "nx-sw-cycle") {
                        setI((p) => p + 1);
                    }
                }}
            >
                <div className="nx-sw__mock nx-sw__mock--popup">
                    <span className="nx-sw__mock-avatar">
                        <img
                            src={avatar(item.letter, item.from, item.to)}
                            alt=""
                        />
                    </span>
                    <span className="nx-sw__mock-body">
                        <strong>{item.name}</strong>
                        <small>{item.meta}</small>
                    </span>
                    <span className="nx-sw__mock-verified" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" fill="currentColor" />
                            <path
                                d="M8 12.5l2.5 2.5L16 9.5"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            </div>
            </div>

            <p className="nx-sw__preview-caption">
                {__(
                    "This is exactly how your notifications will appear to visitors.",
                    "notificationx"
                )}
            </p>
        </div>
    );
};

export default Illustration;
