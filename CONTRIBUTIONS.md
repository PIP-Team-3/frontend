# Contributions

## Jake M Contribution

### Paper Upload Functionality

Implemented the paper upload feature that allows users to upload research papers to the Paper2Notebook platform via both file uploads and URL-based uploads.

**Implementation Date:** November 3, 2025

#### What Was Implemented

- **File Upload Support**: Users can drag-and-drop or select PDF files from their computer
- **URL Upload Support**: Users can provide a direct link to a PDF hosted online
- **Real-time Feedback**: Loading states and error handling during the upload process
- **Automatic Refresh**: Papers list automatically refreshes after successful upload

#### Files Modified

1. **`src/lib/api.ts`**
   - Added `uploadFileAPI()` function for multipart/form-data uploads
   - Enhanced `postAPI()` with proper error handling and headers

2. **`src/app/dashboard/papers/_data/fetchers.ts`**
   - Created `uploadPaper()` function to handle both file and URL uploads
   - Integrated with existing Zod schema validation

3. **`src/app/dashboard/papers/_components/upload-dialog.tsx`**
   - Implemented the `handleUpload()` function (previously a TODO)
   - Added loading state management
   - Integrated error handling with user-friendly messages
   - Connected to Next.js router for page refresh

4. **`.gitignore`**
   - Added `.claude` directory to exclude Claude Code configuration files

#### Technical Details

- **API Endpoint**: `POST /papers/`
- **Request Format**: multipart/form-data with `file` and/or `source_url` fields
- **Response Validation**: Uses existing `PaperSchema` for type safety
- **Error Handling**: Displays descriptive error messages and keeps dialog open for retry
- **Lines Changed**: ~45 lines across 3 core files
- **No New Dependencies**: Used existing React, Next.js, and Zod libraries

#### User Experience Improvements

- Button shows "Uploading..." text during upload
- Button is disabled during upload to prevent double-submission
- Dialog closes automatically on success
- Error messages display detailed API responses
- Form state is cleared after successful upload
