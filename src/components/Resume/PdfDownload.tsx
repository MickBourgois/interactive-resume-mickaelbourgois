import { DownloadIcon } from '@/components/icons'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'

export function PdfDownload() {
  const { resolve } = useTranslation()

  if (!resumeConfig.pdf) return null

  const { label } = resumeConfig.pdf

  const downloadLabel = label
    ? resolve(label)
    : resumeConfig.labels.actions.downloadPdf
      ? resolve(resumeConfig.labels.actions.downloadPdf)
      : 'Download PDF'

  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-resume-primary/10 text-resume-primary hover:bg-resume-primary/20 transition-colors text-sm font-medium cursor-pointer print:hidden"
    >
      <DownloadIcon className="w-4 h-4" />
      {downloadLabel}
    </button>
  )
}
