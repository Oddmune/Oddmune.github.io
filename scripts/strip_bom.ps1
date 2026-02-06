$files = Get-ChildItem -Recurse -File -Filter *.markdown
foreach ($f in $files) {
  $text = Get-Content -Raw -Encoding UTF8 $f.FullName
  if ($text.Length -gt 0 -and $text[0] -eq [char]0xFEFF) {
    $text = $text.Substring(1)
    Set-Content -Encoding UTF8 -Path $f.FullName -Value $text
    Write-Host "Stripped BOM: $($f.FullName)"
  }
}
