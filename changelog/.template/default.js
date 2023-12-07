{
  "type": "message",
  "attachments": [
    {
      "contentType": "application/vnd.microsoft.card.adaptive",
      "contentUrl": null,
      "content": {
            "type": "AdaptiveCard",
        "body": [
          {
            "type": "TextBlock",
            "size": "medium",
            "weight": "bolder",
            "text": "{{ title }}",
            "style": "heading"
          },
          {
            "type": "TextBlock",
            "text": "{{ description }}",
            "wrap": true
          },
          {
            "type": "FactSet",
            "facts": [
              {
                "title": "Environnements:",
                "value": "{{ envs|join(', ') }}"
              },
              {
                "title": "Services impactés:",
                "value": "{{ impact|join(', ') }}"
              },
              {
                "title": "Recommendations:",
                "value": "{{ recommendations }}"
              }
            ]
          },
          {
            "type": "FactSet",
            "facts": [
              {
                "title": "Début:",
                "value": "{{ schedule.start }}"
              },
              {
                "title": "Fin:",
                "value": "{{ schedule.end }}"
              }
            ]
          },
          {
            "type": "TextBlock",
            "text": "**Contacts**: \n\n - {{ contacts|join(' \\n\\n - ') }}",
            "wrap": true
          }
        ],
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.5"
      }
    }
  ]
  
}
