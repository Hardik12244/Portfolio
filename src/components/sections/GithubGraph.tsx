"use client";

import {GitHubCalendar} from "react-github-calendar";

export default function GithubGraph() {
    return (
        <section className="py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    GitHub Activity
                </h2>

                <div className="overflow-x-auto mx-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                    <GitHubCalendar
                        username="Hardik12244"
                        theme={{
  light: ["#ebedf0", "#e7c3c3", "#c98787", "#a85f5f", "#8b4545"],
  dark: ["#161b22", "#8b4545", "#a85f5f", "#c98787", "#ddb2b2"],
}}
                        colorScheme="light"
                        blockSize={12}
                        blockMargin={5}
                        fontSize={14}
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}