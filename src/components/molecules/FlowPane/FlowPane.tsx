'use client'
import * as React from 'react'

import { Selector } from '@/components/atoms/Selector'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { selectSettingsStore } from '@/libs/state/selector'

import { Approvers } from '../../atoms/Approvers/Approvers'
import { Input } from '../../atoms/Input/Input'

export const FlowPane = () => {
  const settingsData = selectSettingsStore.use.settings()
  const { framework, css_library, ui_library, ...mutableSettings } = settingsData
  const iterableMutableSettings = Object.entries(mutableSettings)

  return (
    // ここでinputを変更することができてもそんなに費用対効果が高くない
    // dependenciesを測っていないもののinputを変更することは割と簡単そうなのでやる

    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Input</CardTitle>
        <CardDescription>You also can change the value from here.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Input label='framework' defaultValue={framework || ''} />
              <Input label='css_library' defaultValue={css_library || ''} />
              <Input label='ui_library' defaultValue={ui_library || ''} />
              {iterableMutableSettings.map((kv) => {
                const [label, value] = kv
                if (label == 'manager') {
                  return (
                    <Selector
                      key={label}
                      label={label}
                      id={label}
                      defaultValue={value || ''}
                      options={['npm', 'yarn', 'pnpm', 'bun']}
                    />
                  )
                } else if (label == 'isGit') {
                  return (
                    <Selector
                      key={label}
                      label={label}
                      id={label}
                      defaultValue={value || ''}
                      options={['true', 'false']}
                    />
                  )
                } else {
                  // TODO: zustandにupdateをかける
                  // dbにupdateをかける
                  // その後に再描画をかける
                  return (
                    <Selector
                      key={label}
                      label={label}
                      id={label}
                      defaultValue={value || ''}
                    />
                  )
                }
              })}
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Approvers />
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
