
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
}

const VideoModal = ({ 
  isOpen, 
  onClose, 
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", 
  title = "Product Demo" 
}: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              {title}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="aspect-video w-full">
          <iframe
            src={videoUrl}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <div className="p-6 pt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            See how our solutions can transform your business with cutting-edge technology.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
