(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/events/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
function EventsPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "628404c3e2964b4ee2d0081639e8e7aa697b07aba5298eaddaab4072b7704c3a") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "628404c3e2964b4ee2d0081639e8e7aa697b07aba5298eaddaab4072b7704c3a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "UP-01",
                title: "Generative AI & LLM Workshop",
                date: "MAY 12, 2026",
                category: "WORKSHOP",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                description: "Master fine-tuning and RAG architectures for production-grade AI agents.",
                actionLabel: "REGISTER NOW"
            },
            {
                id: "UP-02",
                title: "Computer Vision Summit",
                date: "JUNE 05, 2026",
                category: "TECH TALK",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
                description: "Exploring real-time object detection and segmentation on edge devices.",
                actionLabel: "GET TICKETS"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const upcomingEvents = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "PA-01",
                title: "Neural Network Visualizer",
                date: "MAR 2026",
                category: "EXHIBITION",
                image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=800",
                description: "A showcase of real-time mapping of hidden layers in deep learning models."
            },
            {
                id: "PA-02",
                title: "The Ethics of AGI",
                date: "FEB 2026",
                category: "SYMPOSIUM",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
                description: "Debating the alignment problem with researchers from top tech labs."
            },
            {
                id: "PA-03",
                title: "ML Hackathon 2026",
                date: "JAN 2026",
                category: "COMPETITION",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
                description: "12 hours of intense coding focused on predictive analytics for sustainability."
            }
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const pastEvents = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            background: "#05080f"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "border-b-4 border-zinc-900 py-24 px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-7xl md:text-9xl font-black tracking-tighter uppercase italic",
                        children: [
                            "Events",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#1a5a96]",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/src/app/events/page.js",
                                lineNumber: 77,
                                columnNumber: 191
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 77,
                        columnNumber: 103
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-xl font-mono text-zinc-500 uppercase tracking-[0.3em]",
                        children: "ACM-DTU // AI & ML Directory"
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 77,
                        columnNumber: 237
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/events/page.js",
                lineNumber: 77,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/events/page.js",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-black uppercase tracking-tight",
                    children: "Upcoming Entries"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.js",
                    lineNumber: 84,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[2px] flex-1 bg-green-500/30"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.js",
                    lineNumber: 84,
                    columnNumber: 139
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-green-500 text-sm animate-pulse",
                    children: "● LIVE_STATUS"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.js",
                    lineNumber: 84,
                    columnNumber: 189
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/page.js",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-12",
                    children: upcomingEvents.map(_EventsPageUpcomingEventsMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.js",
                    lineNumber: 91,
                    columnNumber: 23
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/page.js",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-black uppercase tracking-tight text-zinc-500",
                    children: "Past Archive"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.js",
                    lineNumber: 98,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[2px] flex-1 bg-zinc-800"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.js",
                    lineNumber: 98,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/page.js",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-7xl mx-auto py-16 px-6 space-y-24",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80 hover:opacity-100 transition-opacity",
                            children: pastEvents.map(_EventsPagePastEventsMap)
                        }, void 0, false, {
                            fileName: "[project]/src/app/events/page.js",
                            lineNumber: 105,
                            columnNumber: 85
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/events/page.js",
                    lineNumber: 105,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/page.js",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen font-sans text-zinc-100",
            style: t2,
            children: [
                t3,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "border-t border-zinc-900 py-16 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-700 font-mono text-[10px] uppercase tracking-[1em]",
                        children: "End of Archive // ACM-DTU"
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 112,
                        columnNumber: 146
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.js",
                    lineNumber: 112,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/events/page.js",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    return t8;
}
_c = EventsPage;
function _EventsPagePastEventsMap(event_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex flex-col border border-zinc-800 bg-[#0a0a0a] transition-all duration-300 hover:border-zinc-500 shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] hover:shadow-[10px_10px_0px_0px_rgba(26,90,150,0.2)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 w-full overflow-hidden border-b border-zinc-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: event_0.image,
                    alt: event_0.title,
                    fill: true,
                    className: "object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                }, void 0, false, {
                    fileName: "[project]/src/app/events/page.js",
                    lineNumber: 120,
                    columnNumber: 333
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/events/page.js",
                lineNumber: 120,
                columnNumber: 254
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-baseline mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[10px] text-zinc-500 uppercase",
                                children: event_0.date
                            }, void 0, false, {
                                fileName: "[project]/src/app/events/page.js",
                                lineNumber: 120,
                                columnNumber: 566
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-zinc-800 font-bold tracking-widest uppercase",
                                children: event_0.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/events/page.js",
                                lineNumber: 120,
                                columnNumber: 651
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 120,
                        columnNumber: 508
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold leading-tight mb-3 uppercase group-hover:text-[#1a5a96] transition-colors",
                        children: event_0.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 120,
                        columnNumber: 761
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-[10px] font-black uppercase tracking-tighter text-zinc-600 hover:text-white transition-colors",
                        children: "→ VIEW RECAP"
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 120,
                        columnNumber: 889
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/events/page.js",
                lineNumber: 120,
                columnNumber: 487
            }, this)
        ]
    }, event_0.id, true, {
        fileName: "[project]/src/app/events/page.js",
        lineNumber: 120,
        columnNumber: 10
    }, this);
}
function _EventsPageUpcomingEventsMap(event) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative flex flex-col border-2 border-green-900/50 bg-[#0a0a0a] transition-all duration-300 hover:border-green-400 shadow-[8px_8px_0px_0px_rgba(22,101,52,0.2)] hover:shadow-[12px_12px_0px_0px_rgba(34,197,94,0.3)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-72 w-full overflow-hidden border-b border-green-900/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: event.image,
                        alt: event.title,
                        fill: true,
                        className: "object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 123,
                        columnNumber: 345
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-6 left-6 bg-green-500 text-black px-4 py-1 text-xs font-black tracking-widest uppercase shadow-lg z-10",
                        children: event.category
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 123,
                        columnNumber: 511
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/events/page.js",
                lineNumber: 123,
                columnNumber: 262
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-baseline mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-sm text-green-500 font-bold",
                                children: event.date
                            }, void 0, false, {
                                fileName: "[project]/src/app/events/page.js",
                                lineNumber: 123,
                                columnNumber: 751
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-zinc-700 font-bold tracking-widest uppercase",
                                children: [
                                    "ID: ",
                                    event.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/events/page.js",
                                lineNumber: 123,
                                columnNumber: 831
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 123,
                        columnNumber: 693
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-3xl font-bold leading-tight mb-4 uppercase",
                        children: event.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 123,
                        columnNumber: 938
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-400 text-base leading-relaxed mb-8",
                        children: event.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 123,
                        columnNumber: 1020
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-green-600 py-4 text-black text-sm font-black uppercase tracking-widest transition-all hover:bg-white",
                        children: event.actionLabel
                    }, void 0, false, {
                        fileName: "[project]/src/app/events/page.js",
                        lineNumber: 123,
                        columnNumber: 1103
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/events/page.js",
                lineNumber: 123,
                columnNumber: 672
            }, this)
        ]
    }, event.id, true, {
        fileName: "[project]/src/app/events/page.js",
        lineNumber: 123,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "EventsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_events_page_0z7nl37.js.map