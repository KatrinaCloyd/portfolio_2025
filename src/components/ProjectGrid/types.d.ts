import type { ProjectList } from "@/data/types";

export type ProjectGridProps = {
    projects: ProjectList;
}

export type Filters = 'Dev' | 'Design' | null;