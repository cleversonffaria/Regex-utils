#Regex-utils

Telefone = (99) 9 9999-9999  ou (99) 9999-9999
```
/^(\(?\d{2}\)?\s)?(\d?\s?\d{4,5}\-\d{4})/
```

Email = exemplo@email.com 
``` 
/^[a-z0-9.]+@[a-z0-9]+\.([a-z]{2,})+\.?([a-z]+)?$/i
```

CPF
```
/(^\d{3}[\.]?\d{3}[\.]?\d{3}[\-]?\d{2}$)/;
```

CNPJ 
```
(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)
```

CPF ou CNPJ = 
```
(^\d{3}[\.]?\d{3}[\.]?\d{3}[\-]?\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)
```

RG
```
(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)
```

TELEFONE 
```
(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)
```

CEP 
``` 
(^[0-9]{5})-?([0-9]{3}$)
```

Trim nos espaços
```
^[\s]*(.*?)[\s]*$
```

HTML Tag 
```
<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)
```

Valor hexadecimal 
```
\B#(?:[a-fA-F0–9]{6}|[a-fA-F0–9]{3})\b
```

Regex de email pode ser encontrado = emailregex.com
E-mail Válido 
```
(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])
```

Username = Qualquer username, entre 3 e 15 caracteres com letras, números, underline e traço
```
/^[a-z0-9_-]{3,15}$/
```

Password = Senha de no mínimo 8 caracteres, pelo menos uma letra maiúscula, pelo menos uma letra minúscula, pelo menos um número, pelo menos um caractere especial.
```
(?=^.{8,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[|!"$%&\/\(\)\?\^\'\\\+\-\*]))^.* 
```

URLs = Qualquer url http, https, ftp válida
``` 
^(((https?|ftp):\/\/)?([\w\-\.])+(\.)([\w]){2,4}([\w\/+=%&_\.~?\-]*))*$
```

IPv4 = Qualquer IPv4 válido
```\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\b
```

URLs ou IPv4 = As 2 regex acima juntas
```
^(((h..ps?|f.p):\/\/)?(?:([\w\-\.])+(\[?\.\]?)([\w]){2,4}|(?:(?:25[0–5]|2[0–4]\d|[01]?\d\d?)\[?\.\]?){3}(?:25[0–5]|2[0–4]\d|[01]?\d\d?)))*([\w\/+=%&_\.~?\-]*)$
```
