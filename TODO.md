# AI Chatbot Improvements

## Completed Tasks
- [x] Modified AIService.ts to prioritize API calls for all questions
- [x] Updated API prompt to handle general questions beyond profile data
- [x] Reordered logic: API first, LocalAI fallback, then generic fallback

## Summary of Changes
- Changed AIService logic to try RemoteAI (API) first for every query
- If API fails, fall back to LocalAI manual responses
- If both fail, use the default fallback message
- Updated API prompt to instruct the AI to answer general questions as a helpful assistant when not profile-related

## Testing Needed
- Test with profile-related questions (should use API with profile context)
- Test with general questions (should use API as helpful assistant)
- Test API failure scenarios (should fall back to LocalAI)
- Verify HF_TOKEN is set for API to work
