import CompanyMap from '@components/Map/CompanyMap';
import { CENTER_OF_GERMANY_COORDINATES } from '@consts/misc';
import { Project } from '@prisma/client';
import { Button, Dialog, Flex, Text } from '@radix-ui/themes';
import { PropsWithChildren } from 'react';

const ReferenceDialog = ({ children, data }: PropsWithChildren<{ data?: Project | null }>): JSX.Element => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 700, minWidth: 320 }}>
        <Flex gap="3" justify="between" align="start">
          <Dialog.Title>{data?.projectName}</Dialog.Title>
          <Dialog.Close>
            <Button className="btn p-0">
              <i className="fas fa-close"></i>
            </Button>
          </Dialog.Close>
        </Flex>

        <Flex direction="column" gap="3">
          <div className="row">
            <div className="col-md-6">
              <div className="col-12">
                <label>
                  <Text as="div" size="3" mb="1" weight="bold" color="gray">
                    Partner
                  </Text>
                  <Text as="div" size="4" mb="1" weight="bold">
                    {data?.partnerName}
                  </Text>
                </label>
              </div>

              <div className="col-12">
                <label>
                  <Text as="div" size="3" mb="1" weight="bold" color="gray">
                    Stadt
                  </Text>
                  <Text as="div" size="4" mb="1" weight="bold">
                    {data?.city}
                  </Text>
                </label>
              </div>

              <div className="col-12">
                <label>
                  <Text as="div" size="3" mb="1" weight="bold" color="gray">
                    Start
                  </Text>
                  <Text as="div" size="4" mb="1" weight="bold">
                    {data?.startedAt || '-'}
                  </Text>
                </label>
              </div>

              <div className="col-12">
                <label>
                  <Text as="div" size="3" mb="1" weight="bold" color="gray">
                    Ende
                  </Text>
                  <Text as="div" size="4" mb="1" weight="bold">
                    {data?.endedAt || '-'}
                  </Text>
                </label>
              </div>
            </div>

            <div className="col-md-6">
              {!!data?.city && !!data?.locationLat && !!data?.locationLong && (
                <div className="pb-4">
                  <CompanyMap
                    height={320}
                    zoom={5}
                    lattitude={data?.locationLat}
                    longitude={data?.locationLong}
                    anchorLattitude={CENTER_OF_GERMANY_COORDINATES[0]}
                    anchorLongitude={CENTER_OF_GERMANY_COORDINATES[1]}
                    offsetX={138}
                    offsetY={128}
                    tooltipText={data.city}
                    tooltipSubtext={data.partnerName || ''}
                    disableMarkerTooltip={true}
                  />
                </div>
              )}
            </div>
          </div>
        </Flex>

        <Dialog.Description size="2" mb="4">
          <span className="ql-snow">
            <Text dangerouslySetInnerHTML={{ __html: data?.description || '' }} className="ql-editor"></Text>
          </span>
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button className="btn btn-primary p-1 px-4">Schließen</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ReferenceDialog;
