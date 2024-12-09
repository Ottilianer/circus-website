import { readFile } from "node:fs/promises";
import { join } from "node:path";

interface TemplateVariables {
  [key: `${string}`]: string;
}

export class Template {
  private template: string | null;
  private filePath: string;
  private patterns: TemplateVariables;

  constructor(filePath: string, patterns: TemplateVariables) {
    this.filePath = filePath;
    this.patterns = patterns;
    this.template = null;
  }

  /**
   * Loads the HTML template into the memory
   */
  public async load(): Promise<Template | never> {
    try {
      this.template = await readFile(
        join(process.cwd(), "public", "templates", this.filePath),
        { encoding: "utf8" }
      );
    } catch (error) {
      console.error(
        `An error occured while reading ${this.filePath}: ${error}`
      );
    }
    return this;
  }

  public render() {
    if (this.template === null) {
      throw new Error("Template not loaded");
    }
    return Object.entries(this.patterns).reduce(
      (str, [key, value]) => str.replaceAll(key, value),
      this.template
    );
  }
}
