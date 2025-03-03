export type ProjectImage = {
    name: 'string',
    desktopImage: string,
    mobileImage?: string,
    altText: string,
}

export type ProjectCopyImage = {
    name: 'string',
    copy: HTMLElement,
    textSide: 'Right' | 'Left',
    desktopImage: string,
    mobileImage?: string,
    altText: string,
}

export type ProjectCopy = {
    name: 'string',
    copy: HTMLElement,
}

export type ProjectPage = {
    id: number,
    pageSections: (ProjectImage | ProjectCopyImage | ProjectCopy)[];
};

export type ProjectSummary = {
    id: number,
    slug: string,
    previewImg: string,
    company: string,
    companySummary: string,
    projectSummary: string,
    design: boolean,
    dev: boolean,
    tools: string[],
};

export type ProjectList = ProjectSummary[];

export type Tool = {
    heading: string;
    items: string[];
};

export type ToolList = Tool[];