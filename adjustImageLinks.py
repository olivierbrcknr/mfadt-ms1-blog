ff = open('_posts/2020-11-20-flip-dots-assembly.md')

for a in ff:
  # Check if the line contains markdown image tag.
  if a[0:2] == '![':
    alt = a[2:].split(']')[0]
    src = a.split('(')[1].split(' ')[0]
    title = a.split('"')[1].split('"')[0]
    print('{}{} include lazyload.html image_src="{}" image_alt="{}" image_title="{}" {}{}'.format('{', '%', src, alt, title, '%', '}'))
