"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export default function GithubGraph() {
    const { theme } = useTheme();

    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-[var(--foreground)]">
                    GitHub Activity
                </h2>

                <div className="overflow-x-auto rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
                    <div className="min-w-[900px]">


                        <GitHubCalendar
                            username="Hardik12244"
                            colorScheme={theme === "dark" ? "dark" : "light"}
                            theme={{
                                light: [
                                    "#ebedf0",
                                    "#e7c3c3",
                                    "#c98787",
                                    "#a85f5f",
                                    "#8b4545",
                                ],
                                dark: [
                                    "#2a2a2a",
                                    "#8b4545",
                                    "#a85f5f",
                                    "#c98787",
                                    "#ddb2b2",
                                ],
                            }}
                            blockSize={13}
                            blockMargin={5}
                            fontSize={14}
                            className="mx-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}