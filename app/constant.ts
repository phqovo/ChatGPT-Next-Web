export const OWNER = "phqovo";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const PLUGINS_REPO_URL = `https://github.com/${OWNER}/NextChat-Awesome-Plugins`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const OPENAI_BASE_URL = "https://api.openai.com";
export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";
export const DEEPSEEK_BASE_URL = "https://api.deepseek.com";

export const CACHE_URL_PREFIX = "/api/cache";
export const UPLOAD_URL = `${CACHE_URL_PREFIX}/upload`;

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Plugins = "/plugins",
  Auth = "/auth",
  Sd = "/sd",
  SdNew = "/sd-new",
  Artifacts = "/artifacts",
  SearchChat = "/search-chat",
  McpMarket = "/mcp-market",
}

export enum ApiPath {
  Cors = "",
  OpenAI = "/api/openai",
  Google = "/api/google",
  DeepSeek = "/api/deepseek",
  Artifacts = "/api/artifacts",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Plugin = "chat-next-web-plugin",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
  SdList = "sd-list",
  Mcp = "mcp-store",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;
export const REQUEST_TIMEOUT_MS_FOR_THINKING = REQUEST_TIMEOUT_MS * 5;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Google = "Google",
  DeepSeek = "DeepSeek",
}

// Google API safety settings
export enum GoogleSafetySettingsThreshold {
  BLOCK_NONE = "BLOCK_NONE",
  BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH",
  BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE",
  BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE",
}

export enum ModelProvider {
  GPT = "GPT",
  GeminiPro = "GeminiPro",
  DeepSeek = "DeepSeek",
}

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  SpeechPath: "v1/audio/speech",
  ImagePath: "v1/images/generations",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: (modelName: string) =>
    `v1beta/models/${modelName}:streamGenerateContent`,
};

export const DeepSeek = {
  ExampleEndpoint: DEEPSEEK_BASE_URL,
  ChatPath: "chat/completions",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`;

export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by {{ServiceProvider}}.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: \(x^2\) 
Latex block: $$e=mc^2$$
`;

export const MCP_TOOLS_TEMPLATE = `
[clientId]
{{ clientId }}
[tools]
{{ tools }}
`;

export const MCP_SYSTEM_TEMPLATE = `
You are an AI assistant with access to system tools. Your role is to help users by combining natural language understanding with tool operations when needed.

1. AVAILABLE TOOLS:
{{ MCP_TOOLS }}

2. WHEN TO USE TOOLS:
   - ALWAYS USE TOOLS when they can help answer user questions
   - DO NOT just describe what you could do - TAKE ACTION immediately
   - If you're not sure whether to use a tool, USE IT
   - Common triggers for tool use:
     * Questions about files or directories
     * Requests to check, list, or manipulate system resources
     * Any query that can be answered with available tools

3. HOW TO USE TOOLS:
   A. Tool Call Format:
      - Use markdown code blocks with format: 
      - Always include:
        * method: "tools/call"（Only this method is supported）
        * params: 
          - name: must match an available primitive name
          - arguments: required parameters for the primitive

   B. Response Format:
      - Tool responses will come as user messages
      - Format: 
      - Wait for response before making another tool call

   C. Important Rules:
      - Only use tools/call method
      - Only ONE tool call per message
      - ALWAYS TAKE ACTION instead of just describing what you could do
      - Include the correct clientId in code block language tag
      - Verify arguments match the primitive's requirements

4. INTERACTION FLOW:
   A. When user makes a request:
      - IMMEDIATELY use appropriate tool if available
      - DO NOT ask if user wants you to use the tool
      - DO NOT just describe what you could do
   B. After receiving tool response:
      - Explain results clearly
      - Take next appropriate action if needed
   C. If tools fail:
      - Explain the error
      - Try alternative approach immediately

5. EXAMPLE INTERACTION:

  good example:

   


  

   follwing is the wrong! mcp json example:

   

   This is wrong because the method is not tools/call.
   
   

   This is wrong because the method is not tools/call.!!!!!!!!!!!

   the right format is:
   
   
   please follow the format strictly ONLY use tools/call method!!!!!!!!!!!
   
`;

export const SUMMARIZE_MODEL = "gpt-4o-mini";
export const GEMINI_SUMMARIZE_MODEL = "gemini-2.5-flash";
export const DEEPSEEK_SUMMARIZE_MODEL = "deepseek-chat";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "gpt-4o": "2023-10",
  "gpt-4o-mini": "2023-10",
  "gpt-5": "2024-01",
  "gpt-5-mini": "2024-01",
  "gpt-5-nano": "2024-01",
  "o1-mini": "2023-10",
  "o3-mini": "2023-10",
  "o4-mini": "2023-10",
  "gemini-2.5-flash": "2024-02",
  "gemini-2.5-pro": "2024-02",
  "gemini-3-pro-preview": "2024-02",
  "deepseek-chat": "2024-07",
};

export const DEFAULT_TTS_ENGINE = "OpenAI-TTS";
export const DEFAULT_TTS_ENGINES = ["OpenAI-TTS", "Edge-TTS"];
export const DEFAULT_TTS_MODEL = "tts-1";
export const DEFAULT_TTS_VOICE = "alloy";
export const DEFAULT_TTS_MODELS = ["tts-1", "tts-1-hd"];
export const DEFAULT_TTS_VOICES = [
  "alloy",
  "echo",
  "fable",
  "onyx",
  "nova",
  "shimmer",
];

export const VISION_MODEL_REGEXES = [
  /vision/,
  /gpt-4o/,
  /gemini/,
  /gpt-5/,
  /o3/,
  /o4-mini/,
];

export const EXCLUDE_VISION_MODEL_REGEXES = [];

const openaiModels = [
  "gpt-4o",
  "gpt-4o-mini",
  "gpt-5",
  "gpt-5-mini",
  "gpt-5-nano",
  "o1-mini",
  "o3-mini",
  "o4-mini",
];

const googleModels = [
  "gemini-2.5-flash",
  "gemini-2.5-pro",
  "gemini-3-pro-preview",
];

const deepseekModels = ["deepseek-chat"];

let seq = 1000;
export const DEFAULT_MODELS = [
  ...openaiModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
      sorted: 1,
    },
  })),
  ...googleModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
      sorted: 3,
    },
  })),
  ...deepseekModels.map((name) => ({
    name,
    available: true,
    sorted: seq++,
    provider: {
      id: "deepseek",
      providerName: "DeepSeek",
      providerType: "deepseek",
      sorted: 13,
    },
  })),
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

export const internalAllowedWebDavEndpoints = [
  "https://dav.jianguoyun.com/dav/",
  "https://dav.dropdav.com/",
  "https://dav.box.com/dav",
  "https://nanao.teracloud.jp/dav/",
  "https://bora.teracloud.jp/dav/",
  "https://webdav.4shared.com/",
  "https://dav.idrivesync.com",
  "https://webdav.yandex.com",
  "https://app.koofr.net/dav/Koofr",
];

export const DEFAULT_GA_ID = "G-89WN60ZK2E";

export const SAAS_CHAT_URL = "https://nextchat.club";
export const SAAS_CHAT_UTM_URL = "https://nextchat.club?utm=github";
