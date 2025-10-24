'use client';

import { Link as LinkIcon, Upload } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
	Tabs,
	TabsContent,
	TabsContents,
	TabsList,
	TabsTrigger,
} from '../../../../components/animate-ui/components/radix/tabs';

interface UploadDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
	const [file, setFile] = useState<File | null>(null);
	const [url, setUrl] = useState('');
	const [isDragging, setIsDragging] = useState(false);

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(true);
	};

	const handleDragLeave = () => {
		setIsDragging(false);
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		setIsDragging(false);
		const files = e.dataTransfer.files;
		if (files.length > 0) {
			const droppedFile = files[0];
			if (droppedFile.type === 'application/pdf') {
				setFile(droppedFile);
			}
		}
	};

	const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files && files.length > 0) {
			const selectedFile = files[0];
			if (selectedFile.type === 'application/pdf') {
				setFile(selectedFile);
			}
		}
	};

	const handleUpload = async () => {
		if (!file && !url) {
			return;
		}

		// TODO: Implement upload logic
		console.log('Uploading:', file ? `File: ${file.name}` : `URL: ${url}`);
		onOpenChange(false);
		setFile(null);
		setUrl('');
	};

	const handleDialogOpenChange = (newOpen: boolean) => {
		if (!newOpen) {
			setFile(null);
			setUrl('');
		}
		onOpenChange(newOpen);
	};

	return (
		<Dialog open={open} onOpenChange={handleDialogOpenChange}>
			<DialogContent className="sm:max-w-[500px]">
				<DialogHeader>
					<DialogTitle>Upload Paper</DialogTitle>
					<DialogDescription>
						Upload a PDF file or provide a link to a PDF
					</DialogDescription>
				</DialogHeader>

				<Tabs defaultValue="file" className="w-full">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="file" className="flex items-center gap-2">
							<Upload className="h-4 w-4" />
							Upload File
						</TabsTrigger>
						<TabsTrigger value="url" className="flex items-center gap-2">
							<LinkIcon className="h-4 w-4" />
							Add Link
						</TabsTrigger>
					</TabsList>

					<TabsContents>
						<TabsContent value="file">
							{/* Dropzone */}
							<div
								onDragOver={handleDragOver}
								onDragLeave={handleDragLeave}
								onDrop={handleDrop}
								className={`cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition ${
									isDragging
										? 'border-blue-500 bg-blue-50'
										: 'border-gray-300 hover:border-gray-400'
								}`}
							>
								<input
									type="file"
									accept=".pdf"
									onChange={handleFileSelect}
									className="hidden"
									id="file-input"
								/>
								<label htmlFor="file-input" className="cursor-pointer">
									<Upload className="mx-auto mb-2 h-8 w-8 text-gray-400" />
									<p className="font-medium text-sm">
										{file ? file.name : 'Drag and drop your PDF here'}
									</p>
									<p className="mt-1 text-gray-500 text-xs">
										or click to select a file
									</p>
								</label>
							</div>
						</TabsContent>

						<TabsContent value="url">
							{/* URL Input */}
							<div>
								<label className="mb-2 block font-medium text-sm">
									PDF Link
								</label>
								<Input
									type="url"
									placeholder="https://example.com/paper.pdf"
									value={url}
									onChange={(e) => setUrl(e.target.value)}
								/>
							</div>
						</TabsContent>
					</TabsContents>
				</Tabs>

				{/* Upload Button */}
				<Button
					onClick={handleUpload}
					disabled={!file && !url.trim()}
					className="w-full"
				>
					Upload
				</Button>
			</DialogContent>
		</Dialog>
	);
}
