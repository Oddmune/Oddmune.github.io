$files = Get-ChildItem -Recurse -File -Filter *.markdown
$found = @()
foreach ($f in $files) {
  $bytes = Get-Content -Encoding Byte -TotalCount 3 -Path $f.FullName
  if ($bytes.Length -eq 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF) {
    $found += $f.FullName
  }
}

if ($found.Count -eq 0) {
  Write-Host "No UTF-8 BOM found in .markdown files."
  exit 0
}

Write-Host "UTF-8 BOM found in the following files:"
$found | ForEach-Object { Write-Host $_ }
exit 1
