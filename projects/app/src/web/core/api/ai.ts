import { GET, POST, PUT, DELETE } from '@/web/common/api/request';
import type { CreateQuestionGuideParams } from '@/global/core/api/aiReq.d';

export const postQuestionGuide = (data: CreateQuestionGuideParams, cancelToken: AbortController) =>
  POST<string[]>('/core/ai/agent/createQuestionGuide', data, { cancelToken });
